import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
**/
export declare class CalloutStatusRow extends SpeakeasyBase {
    calloutStatusId?: number;
    impressionCount?: MetricValue;
    rowDimensions?: RowDimensions;
}
