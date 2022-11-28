import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription } from "./googlecloudbeyondcorpsaasplatformsubscriptionsv1alphasubscription";



// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse
/** 
 * Response message for BeyondCorp.ListSubscriptions.
**/
export class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription })
  subscriptions?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription[];
}
