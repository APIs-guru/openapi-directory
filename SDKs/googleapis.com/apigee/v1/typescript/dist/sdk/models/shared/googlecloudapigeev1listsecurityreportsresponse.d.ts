import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityReport } from "./googlecloudapigeev1securityreport";
/**
 * The response for SecurityReports.
**/
export declare class GoogleCloudApigeeV1ListSecurityReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    securityReports?: GoogleCloudApigeeV1SecurityReport[];
}
