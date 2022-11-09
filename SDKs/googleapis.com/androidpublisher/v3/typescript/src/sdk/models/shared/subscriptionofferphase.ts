import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OtherRegionsSubscriptionOfferPhaseConfig } from "./otherregionssubscriptionofferphaseconfig";
import { RegionalSubscriptionOfferPhaseConfig } from "./regionalsubscriptionofferphaseconfig";


// SubscriptionOfferPhase
/** 
 * A single phase of a subscription offer.
**/
export class SubscriptionOfferPhase extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig;

  @Metadata({ data: "json, name=recurrenceCount" })
  recurrenceCount?: number;

  @Metadata({ data: "json, name=regionalConfigs", elemType: shared.RegionalSubscriptionOfferPhaseConfig })
  regionalConfigs?: RegionalSubscriptionOfferPhaseConfig[];
}
