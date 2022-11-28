import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityProfile } from "./googlecloudapigeev1securityprofile";
/**
 * Response for ListSecurityProfileRevisions.
**/
export declare class GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
}
