import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiCategoryData } from "./googlecloudapigeev1apicategorydata";
/**
 * the Api category resource wrapped with response status, error_code etc.
**/
export declare class GoogleCloudApigeeV1ApiCategory extends SpeakeasyBase {
    data?: GoogleCloudApigeeV1ApiCategoryData;
    errorCode?: string;
    message?: string;
    requestId?: string;
    status?: string;
}
