import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SiteStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    RequiresReview = "REQUIRES_REVIEW",
    GettingReady = "GETTING_READY",
    Ready = "READY",
    NeedsAttention = "NEEDS_ATTENTION"
}


// Site
/** 
 * Representation of a Site.
**/
export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoAdsEnabled" })
  autoAdsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SiteStateEnum;
}
