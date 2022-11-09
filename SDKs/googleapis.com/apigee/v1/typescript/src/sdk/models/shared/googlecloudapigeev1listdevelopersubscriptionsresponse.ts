import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1DeveloperSubscription } from "./googlecloudapigeev1developersubscription";


// GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
/** 
 * Response for ListDeveloperSubscriptions.
**/
export class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerSubscriptions", elemType: shared.GoogleCloudApigeeV1DeveloperSubscription })
  developerSubscriptions?: GoogleCloudApigeeV1DeveloperSubscription[];

  @Metadata({ data: "json, name=nextStartKey" })
  nextStartKey?: string;
}
