import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramBucket } from "./histogrambucket";
/**
 * The data statistics of a series of FLOAT64 values.
**/
export declare class Float64Stats extends SpeakeasyBase {
    histogramBuckets?: HistogramBucket[];
    mean?: number;
    quantiles?: number[];
    standardDeviation?: number;
}
