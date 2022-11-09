import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OfferTag } from "./offertag";
import { OtherRegionsSubscriptionOfferConfig } from "./otherregionssubscriptionofferconfig";
import { SubscriptionOfferPhase } from "./subscriptionofferphase";
import { RegionalSubscriptionOfferConfig } from "./regionalsubscriptionofferconfig";
import { SubscriptionOfferTargeting } from "./subscriptionoffertargeting";

export enum SubscriptionOfferStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// SubscriptionOffer
/** 
 * A single, temporary offer
**/
export class SubscriptionOffer extends SpeakeasyBase {
  @Metadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=offerTags", elemType: shared.OfferTag })
  offerTags?: OfferTag[];

  @Metadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=phases", elemType: shared.SubscriptionOfferPhase })
  phases?: SubscriptionOfferPhase[];

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=regionalConfigs", elemType: shared.RegionalSubscriptionOfferConfig })
  regionalConfigs?: RegionalSubscriptionOfferConfig[];

  @Metadata({ data: "json, name=state" })
  state?: SubscriptionOfferStateEnum;

  @Metadata({ data: "json, name=targeting" })
  targeting?: SubscriptionOfferTargeting;
}
