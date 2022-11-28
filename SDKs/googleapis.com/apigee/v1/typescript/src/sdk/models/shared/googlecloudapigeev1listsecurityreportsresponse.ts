import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityReport } from "./googlecloudapigeev1securityreport";



// GoogleCloudApigeeV1ListSecurityReportsResponse
/** 
 * The response for SecurityReports.
**/
export class GoogleCloudApigeeV1ListSecurityReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=securityReports", elemType: GoogleCloudApigeeV1SecurityReport })
  securityReports?: GoogleCloudApigeeV1SecurityReport[];
}
