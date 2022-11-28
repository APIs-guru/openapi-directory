import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
export declare enum BidResponseWithoutBidsStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    ResponsesWithoutBids = "RESPONSES_WITHOUT_BIDS",
    ResponsesWithoutBidsForAccount = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT",
    ResponsesWithoutBidsForDeal = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"
}
/**
 * The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
**/
export declare class BidResponseWithoutBidsStatusRow extends SpeakeasyBase {
    impressionCount?: MetricValue;
    rowDimensions?: RowDimensions;
    status?: BidResponseWithoutBidsStatusRowStatusEnum;
}
