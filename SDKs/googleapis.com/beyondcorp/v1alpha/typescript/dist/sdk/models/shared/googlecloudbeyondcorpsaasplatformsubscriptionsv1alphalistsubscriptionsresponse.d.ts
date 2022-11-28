import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription } from "./googlecloudbeyondcorpsaasplatformsubscriptionsv1alphasubscription";
/**
 * Response message for BeyondCorp.ListSubscriptions.
**/
export declare class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    subscriptions?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription[];
}
