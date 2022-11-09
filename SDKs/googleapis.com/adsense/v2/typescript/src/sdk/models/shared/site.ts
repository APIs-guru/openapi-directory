import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SiteStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    RequiresReview = "REQUIRES_REVIEW"
,    GettingReady = "GETTING_READY"
,    Ready = "READY"
,    NeedsAttention = "NEEDS_ATTENTION"
}


// Site
/** 
 * Representation of a Site.
**/
export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoAdsEnabled" })
  autoAdsEnabled?: boolean;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @Metadata({ data: "json, name=state" })
  state?: SiteStateEnum;
}
