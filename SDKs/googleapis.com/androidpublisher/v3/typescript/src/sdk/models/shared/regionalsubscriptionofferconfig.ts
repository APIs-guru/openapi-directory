import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionalSubscriptionOfferConfig
/** 
 * Configuration for a subscription offer in a single region.
**/
export class RegionalSubscriptionOfferConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
