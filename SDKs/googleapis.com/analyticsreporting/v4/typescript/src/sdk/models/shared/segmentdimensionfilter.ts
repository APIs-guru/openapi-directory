import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SegmentDimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Regexp = "REGEXP",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Partial = "PARTIAL",
    Exact = "EXACT",
    InList = "IN_LIST",
    NumericLessThan = "NUMERIC_LESS_THAN",
    NumericGreaterThan = "NUMERIC_GREATER_THAN",
    NumericBetween = "NUMERIC_BETWEEN"
}


// SegmentDimensionFilter
/** 
 * Dimension filter specifies the filtering options on a dimension.
**/
export class SegmentDimensionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=expressions" })
  expressions?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxComparisonValue" })
  maxComparisonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minComparisonValue" })
  minComparisonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: SegmentDimensionFilterOperatorEnum;
}
