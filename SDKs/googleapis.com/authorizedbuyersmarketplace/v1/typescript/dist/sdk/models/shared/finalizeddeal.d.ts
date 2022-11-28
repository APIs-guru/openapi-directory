import { SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";
import { DealPausingInfo } from "./dealpausinginfo";
import { RtbMetrics } from "./rtbmetrics";
export declare enum FinalizedDealDealServingStatusEnum {
    DealServingStatusUnspecified = "DEAL_SERVING_STATUS_UNSPECIFIED",
    Active = "ACTIVE",
    Ended = "ENDED",
    PausedByBuyer = "PAUSED_BY_BUYER",
    PausedBySeller = "PAUSED_BY_SELLER"
}
/**
 * A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
**/
export declare class FinalizedDeal extends SpeakeasyBase {
    deal?: Deal;
    dealPausingInfo?: DealPausingInfo;
    dealServingStatus?: FinalizedDealDealServingStatusEnum;
    name?: string;
    readyToServe?: boolean;
    rtbMetrics?: RtbMetrics;
}
