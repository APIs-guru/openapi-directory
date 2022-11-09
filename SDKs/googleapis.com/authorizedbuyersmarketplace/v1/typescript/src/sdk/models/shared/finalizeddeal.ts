import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Deal } from "./deal";
import { DealPausingInfo } from "./dealpausinginfo";
import { RtbMetrics } from "./rtbmetrics";

export enum FinalizedDealDealServingStatusEnum {
    DealServingStatusUnspecified = "DEAL_SERVING_STATUS_UNSPECIFIED"
,    Active = "ACTIVE"
,    Ended = "ENDED"
,    PausedByBuyer = "PAUSED_BY_BUYER"
,    PausedBySeller = "PAUSED_BY_SELLER"
}


// FinalizedDeal
/** 
 * A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
**/
export class FinalizedDeal extends SpeakeasyBase {
  @Metadata({ data: "json, name=deal" })
  deal?: Deal;

  @Metadata({ data: "json, name=dealPausingInfo" })
  dealPausingInfo?: DealPausingInfo;

  @Metadata({ data: "json, name=dealServingStatus" })
  dealServingStatus?: FinalizedDealDealServingStatusEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=readyToServe" })
  readyToServe?: boolean;

  @Metadata({ data: "json, name=rtbMetrics" })
  rtbMetrics?: RtbMetrics;
}
