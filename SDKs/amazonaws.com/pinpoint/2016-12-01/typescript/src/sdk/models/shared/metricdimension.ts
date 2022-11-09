import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricDimension
/** 
 * Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
**/
export class MetricDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: string;

  @Metadata({ data: "json, name=Value" })
  value: number;
}
