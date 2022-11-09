import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1SecurityProfile } from "./googlecloudapigeev1securityprofile";


// GoogleCloudApigeeV1ListSecurityProfilesResponse
/** 
 * Response for ListSecurityProfiles.
**/
export class GoogleCloudApigeeV1ListSecurityProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=securityProfiles", elemType: shared.GoogleCloudApigeeV1SecurityProfile })
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
}
