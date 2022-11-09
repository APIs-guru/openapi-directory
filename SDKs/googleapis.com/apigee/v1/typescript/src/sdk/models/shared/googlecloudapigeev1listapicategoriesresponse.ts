import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ApiCategoryData } from "./googlecloudapigeev1apicategorydata";


// GoogleCloudApigeeV1ListApiCategoriesResponse
/** 
 * the response for ListApiCategoriesRequest.
**/
export class GoogleCloudApigeeV1ListApiCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.GoogleCloudApigeeV1ApiCategoryData })
  data?: GoogleCloudApigeeV1ApiCategoryData[];

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
