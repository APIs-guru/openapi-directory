import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeveloperSubscription } from "./googlecloudapigeev1developersubscription";
/**
 * Response for ListDeveloperSubscriptions.
**/
export declare class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse extends SpeakeasyBase {
    developerSubscriptions?: GoogleCloudApigeeV1DeveloperSubscription[];
    nextStartKey?: string;
}
