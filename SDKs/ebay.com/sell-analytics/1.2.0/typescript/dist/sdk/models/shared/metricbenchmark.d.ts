import { SpeakeasyBase } from "../../../internal/utils";
import { BenchmarkMetadata } from "./benchmarkmetadata";
/**
 * This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
**/
export declare class MetricBenchmark extends SpeakeasyBase {
    adjustment?: string;
    basis?: string;
    metadata?: BenchmarkMetadata;
    rating?: string;
}
