import { SpeakeasyBase } from "../../../internal/utils";
import { MetricHeaderEntry } from "./metricheaderentry";
import { PivotHeader } from "./pivotheader";
/**
 * The headers for the metrics.
**/
export declare class MetricHeader extends SpeakeasyBase {
    metricHeaderEntries?: MetricHeaderEntry[];
    pivotHeaders?: PivotHeader[];
}
