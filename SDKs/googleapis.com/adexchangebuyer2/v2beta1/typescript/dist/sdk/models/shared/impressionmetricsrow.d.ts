import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
**/
export declare class ImpressionMetricsRow extends SpeakeasyBase {
    availableImpressions?: MetricValue;
    bidRequests?: MetricValue;
    inventoryMatches?: MetricValue;
    responsesWithBids?: MetricValue;
    rowDimensions?: RowDimensions;
    successfulResponses?: MetricValue;
}
