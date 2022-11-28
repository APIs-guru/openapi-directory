import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiCategoryData } from "./googlecloudapigeev1apicategorydata";
/**
 * the response for ListApiCategoriesRequest.
**/
export declare class GoogleCloudApigeeV1ListApiCategoriesResponse extends SpeakeasyBase {
    data?: GoogleCloudApigeeV1ApiCategoryData[];
    errorCode?: string;
    message?: string;
    requestId?: string;
    status?: string;
}
