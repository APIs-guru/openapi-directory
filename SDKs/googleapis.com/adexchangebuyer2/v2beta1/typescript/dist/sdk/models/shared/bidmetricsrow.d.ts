import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
**/
export declare class BidMetricsRow extends SpeakeasyBase {
    bids?: MetricValue;
    bidsInAuction?: MetricValue;
    billedImpressions?: MetricValue;
    impressionsWon?: MetricValue;
    measurableImpressions?: MetricValue;
    reachedQueries?: MetricValue;
    rowDimensions?: RowDimensions;
    viewableImpressions?: MetricValue;
}
