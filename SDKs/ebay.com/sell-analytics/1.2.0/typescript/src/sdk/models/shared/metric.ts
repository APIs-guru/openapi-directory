import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricBenchmark } from "./metricbenchmark";
import { MetricDistribution } from "./metricdistribution";



// Metric
/** 
 * This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benchmark" })
  benchmark?: MetricBenchmark;

  @SpeakeasyMetadata({ data: "json, name=distributions", elemType: MetricDistribution })
  distributions?: MetricDistribution[];

  @SpeakeasyMetadata({ data: "json, name=metricKey" })
  metricKey?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
