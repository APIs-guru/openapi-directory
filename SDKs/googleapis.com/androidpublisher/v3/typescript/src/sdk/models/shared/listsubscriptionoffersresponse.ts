import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionOffer } from "./subscriptionoffer";



// ListSubscriptionOffersResponse
/** 
 * Response message for ListSubscriptionOffers.
**/
export class ListSubscriptionOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOffers", elemType: SubscriptionOffer })
  subscriptionOffers?: SubscriptionOffer[];
}
