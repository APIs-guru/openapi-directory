import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeveloperSubscription } from "./googlecloudapigeev1developersubscription";



// GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
/** 
 * Response for ListDeveloperSubscriptions.
**/
export class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerSubscriptions", elemType: GoogleCloudApigeeV1DeveloperSubscription })
  developerSubscriptions?: GoogleCloudApigeeV1DeveloperSubscription[];

  @SpeakeasyMetadata({ data: "json, name=nextStartKey" })
  nextStartKey?: string;
}
