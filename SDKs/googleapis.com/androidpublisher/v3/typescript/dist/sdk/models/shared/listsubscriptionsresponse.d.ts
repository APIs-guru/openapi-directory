import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Response message for ListSubscriptions.
**/
export declare class ListSubscriptionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    subscriptions?: Subscription[];
}
