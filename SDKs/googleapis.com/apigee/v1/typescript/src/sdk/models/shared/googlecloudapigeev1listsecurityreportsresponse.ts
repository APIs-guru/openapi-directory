import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1SecurityReport } from "./googlecloudapigeev1securityreport";


// GoogleCloudApigeeV1ListSecurityReportsResponse
/** 
 * The response for SecurityReports.
**/
export class GoogleCloudApigeeV1ListSecurityReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=securityReports", elemType: shared.GoogleCloudApigeeV1SecurityReport })
  securityReports?: GoogleCloudApigeeV1SecurityReport[];
}
