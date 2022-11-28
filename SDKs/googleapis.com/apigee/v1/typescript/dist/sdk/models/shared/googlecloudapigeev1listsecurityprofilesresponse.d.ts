import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityProfile } from "./googlecloudapigeev1securityprofile";
/**
 * Response for ListSecurityProfiles.
**/
export declare class GoogleCloudApigeeV1ListSecurityProfilesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
}
