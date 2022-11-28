import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OtherRegionsSubscriptionOfferConfig
/** 
 * Configuration for any new locations Play may launch in specified on a subscription offer.
**/
export class OtherRegionsSubscriptionOfferConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=otherRegionsNewSubscriberAvailability" })
  otherRegionsNewSubscriberAvailability?: boolean;
}
