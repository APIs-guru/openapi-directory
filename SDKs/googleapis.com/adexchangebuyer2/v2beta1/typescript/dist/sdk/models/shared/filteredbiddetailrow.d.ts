import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
**/
export declare class FilteredBidDetailRow extends SpeakeasyBase {
    bidCount?: MetricValue;
    detail?: string;
    detailId?: number;
    rowDimensions?: RowDimensions;
}
