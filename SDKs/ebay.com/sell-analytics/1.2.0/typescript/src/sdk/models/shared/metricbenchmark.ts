import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BenchmarkMetadata } from "./benchmarkmetadata";



// MetricBenchmark
/** 
 * This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
**/
export class MetricBenchmark extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustment" })
  adjustment?: string;

  @SpeakeasyMetadata({ data: "json, name=basis" })
  basis?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: BenchmarkMetadata;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: string;
}
