import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OtherRegionsSubscriptionOfferPhaseConfig } from "./otherregionssubscriptionofferphaseconfig";
import { RegionalSubscriptionOfferPhaseConfig } from "./regionalsubscriptionofferphaseconfig";



// SubscriptionOfferPhase
/** 
 * A single phase of a subscription offer.
**/
export class SubscriptionOfferPhase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig;

  @SpeakeasyMetadata({ data: "json, name=recurrenceCount" })
  recurrenceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalSubscriptionOfferPhaseConfig })
  regionalConfigs?: RegionalSubscriptionOfferPhaseConfig[];
}
