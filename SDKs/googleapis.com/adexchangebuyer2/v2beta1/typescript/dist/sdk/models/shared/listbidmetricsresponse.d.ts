import { SpeakeasyBase } from "../../../internal/utils";
import { BidMetricsRow } from "./bidmetricsrow";
/**
 * Response message for listing the metrics that are measured in number of bids.
**/
export declare class ListBidMetricsResponse extends SpeakeasyBase {
    bidMetricsRows?: BidMetricsRow[];
    nextPageToken?: string;
}
