import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OtherRegionsSubscriptionOfferConfig
/** 
 * Configuration for any new locations Play may launch in specified on a subscription offer.
**/
export class OtherRegionsSubscriptionOfferConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=otherRegionsNewSubscriberAvailability" })
  otherRegionsNewSubscriberAvailability?: boolean;
}
