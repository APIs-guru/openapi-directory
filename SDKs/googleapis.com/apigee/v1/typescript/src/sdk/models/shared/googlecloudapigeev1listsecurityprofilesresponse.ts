import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityProfile } from "./googlecloudapigeev1securityprofile";



// GoogleCloudApigeeV1ListSecurityProfilesResponse
/** 
 * Response for ListSecurityProfiles.
**/
export class GoogleCloudApigeeV1ListSecurityProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfiles", elemType: GoogleCloudApigeeV1SecurityProfile })
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
}
