import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Regexp = "REGEXP",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Partial = "PARTIAL",
    Exact = "EXACT",
    NumericEqual = "NUMERIC_EQUAL",
    NumericGreaterThan = "NUMERIC_GREATER_THAN",
    NumericLessThan = "NUMERIC_LESS_THAN",
    InList = "IN_LIST"
}


// DimensionFilter
/** 
 * Dimension filter specifies the filtering options on a dimension.
**/
export class DimensionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=expressions" })
  expressions?: string[];

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: DimensionFilterOperatorEnum;
}
