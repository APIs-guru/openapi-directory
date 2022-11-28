import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityProfile } from "./googlecloudapigeev1securityprofile";



// GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse
/** 
 * Response for ListSecurityProfileRevisions.
**/
export class GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfiles", elemType: GoogleCloudApigeeV1SecurityProfile })
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
}
