import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BenchmarkMetadata } from "./benchmarkmetadata";


// MetricBenchmark
/** 
 * This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
**/
export class MetricBenchmark extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment" })
  adjustment?: string;

  @Metadata({ data: "json, name=basis" })
  basis?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: BenchmarkMetadata;

  @Metadata({ data: "json, name=rating" })
  rating?: string;
}
