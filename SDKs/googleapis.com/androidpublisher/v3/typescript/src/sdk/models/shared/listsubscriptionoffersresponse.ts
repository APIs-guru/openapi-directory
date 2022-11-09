import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionOffer } from "./subscriptionoffer";


// ListSubscriptionOffersResponse
/** 
 * Response message for ListSubscriptionOffers.
**/
export class ListSubscriptionOffersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=subscriptionOffers", elemType: shared.SubscriptionOffer })
  subscriptionOffers?: SubscriptionOffer[];
}
