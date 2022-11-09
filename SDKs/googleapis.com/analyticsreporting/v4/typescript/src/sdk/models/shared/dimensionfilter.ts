import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    Regexp = "REGEXP"
,    BeginsWith = "BEGINS_WITH"
,    EndsWith = "ENDS_WITH"
,    Partial = "PARTIAL"
,    Exact = "EXACT"
,    NumericEqual = "NUMERIC_EQUAL"
,    NumericGreaterThan = "NUMERIC_GREATER_THAN"
,    NumericLessThan = "NUMERIC_LESS_THAN"
,    InList = "IN_LIST"
}


// DimensionFilter
/** 
 * Dimension filter specifies the filtering options on a dimension.
**/
export class DimensionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=expressions" })
  expressions?: string[];

  @Metadata({ data: "json, name=not" })
  not?: boolean;

  @Metadata({ data: "json, name=operator" })
  operator?: DimensionFilterOperatorEnum;
}
