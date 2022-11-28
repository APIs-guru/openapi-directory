import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferTag } from "./offertag";
import { OtherRegionsSubscriptionOfferConfig } from "./otherregionssubscriptionofferconfig";
import { SubscriptionOfferPhase } from "./subscriptionofferphase";
import { RegionalSubscriptionOfferConfig } from "./regionalsubscriptionofferconfig";
import { SubscriptionOfferTargeting } from "./subscriptionoffertargeting";


export enum SubscriptionOfferStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// SubscriptionOfferInput
/** 
 * A single, temporary offer
**/
export class SubscriptionOfferInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerTags", elemType: OfferTag })
  offerTags?: OfferTag[];

  @SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=phases", elemType: SubscriptionOfferPhase })
  phases?: SubscriptionOfferPhase[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalSubscriptionOfferConfig })
  regionalConfigs?: RegionalSubscriptionOfferConfig[];

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: SubscriptionOfferTargeting;
}


// SubscriptionOffer
/** 
 * A single, temporary offer
**/
export class SubscriptionOffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerTags", elemType: OfferTag })
  offerTags?: OfferTag[];

  @SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=phases", elemType: SubscriptionOfferPhase })
  phases?: SubscriptionOfferPhase[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalSubscriptionOfferConfig })
  regionalConfigs?: RegionalSubscriptionOfferConfig[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SubscriptionOfferStateEnum;

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: SubscriptionOfferTargeting;
}
