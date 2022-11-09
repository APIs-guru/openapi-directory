import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricBenchmark } from "./metricbenchmark";
import { MetricDistribution } from "./metricdistribution";


// Metric
/** 
 * This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=benchmark" })
  benchmark?: MetricBenchmark;

  @Metadata({ data: "json, name=distributions", elemType: shared.MetricDistribution })
  distributions?: MetricDistribution[];

  @Metadata({ data: "json, name=metricKey" })
  metricKey?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
