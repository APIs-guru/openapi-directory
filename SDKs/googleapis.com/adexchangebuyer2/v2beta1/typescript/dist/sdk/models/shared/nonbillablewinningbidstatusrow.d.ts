import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
export declare enum NonBillableWinningBidStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    AdNotRendered = "AD_NOT_RENDERED",
    InvalidImpression = "INVALID_IMPRESSION",
    FatalVastError = "FATAL_VAST_ERROR",
    LostInMediation = "LOST_IN_MEDIATION"
}
/**
 * The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
**/
export declare class NonBillableWinningBidStatusRow extends SpeakeasyBase {
    bidCount?: MetricValue;
    rowDimensions?: RowDimensions;
    status?: NonBillableWinningBidStatusRowStatusEnum;
}
