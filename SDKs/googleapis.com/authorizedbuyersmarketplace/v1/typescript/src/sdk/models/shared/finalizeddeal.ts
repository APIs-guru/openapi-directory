import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";
import { DealPausingInfo } from "./dealpausinginfo";
import { RtbMetrics } from "./rtbmetrics";


export enum FinalizedDealDealServingStatusEnum {
    DealServingStatusUnspecified = "DEAL_SERVING_STATUS_UNSPECIFIED",
    Active = "ACTIVE",
    Ended = "ENDED",
    PausedByBuyer = "PAUSED_BY_BUYER",
    PausedBySeller = "PAUSED_BY_SELLER"
}


// FinalizedDeal
/** 
 * A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
**/
export class FinalizedDeal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deal" })
  deal?: Deal;

  @SpeakeasyMetadata({ data: "json, name=dealPausingInfo" })
  dealPausingInfo?: DealPausingInfo;

  @SpeakeasyMetadata({ data: "json, name=dealServingStatus" })
  dealServingStatus?: FinalizedDealDealServingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=readyToServe" })
  readyToServe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rtbMetrics" })
  rtbMetrics?: RtbMetrics;
}
