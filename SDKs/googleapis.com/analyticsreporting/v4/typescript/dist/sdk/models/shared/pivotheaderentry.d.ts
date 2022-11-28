import { SpeakeasyBase } from "../../../internal/utils";
import { MetricHeaderEntry } from "./metricheaderentry";
/**
 * The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
**/
export declare class PivotHeaderEntry extends SpeakeasyBase {
    dimensionNames?: string[];
    dimensionValues?: string[];
    metric?: MetricHeaderEntry;
}
