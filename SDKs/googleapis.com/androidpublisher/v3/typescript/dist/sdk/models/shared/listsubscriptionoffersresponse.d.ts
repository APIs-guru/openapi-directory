import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionOffer } from "./subscriptionoffer";
/**
 * Response message for ListSubscriptionOffers.
**/
export declare class ListSubscriptionOffersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    subscriptionOffers?: SubscriptionOffer[];
}
