import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SegmentDimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    Regexp = "REGEXP"
,    BeginsWith = "BEGINS_WITH"
,    EndsWith = "ENDS_WITH"
,    Partial = "PARTIAL"
,    Exact = "EXACT"
,    InList = "IN_LIST"
,    NumericLessThan = "NUMERIC_LESS_THAN"
,    NumericGreaterThan = "NUMERIC_GREATER_THAN"
,    NumericBetween = "NUMERIC_BETWEEN"
}


// SegmentDimensionFilter
/** 
 * Dimension filter specifies the filtering options on a dimension.
**/
export class SegmentDimensionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=expressions" })
  expressions?: string[];

  @Metadata({ data: "json, name=maxComparisonValue" })
  maxComparisonValue?: string;

  @Metadata({ data: "json, name=minComparisonValue" })
  minComparisonValue?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: SegmentDimensionFilterOperatorEnum;
}
