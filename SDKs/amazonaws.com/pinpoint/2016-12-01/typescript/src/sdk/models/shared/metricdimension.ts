import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricDimension
/** 
 * Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
**/
export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;
}
