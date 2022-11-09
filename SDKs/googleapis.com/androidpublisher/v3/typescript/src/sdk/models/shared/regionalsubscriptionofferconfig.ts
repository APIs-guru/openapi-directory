import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionalSubscriptionOfferConfig
/** 
 * Configuration for a subscription offer in a single region.
**/
export class RegionalSubscriptionOfferConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
