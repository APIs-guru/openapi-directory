import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiCategoryData } from "./googlecloudapigeev1apicategorydata";



// GoogleCloudApigeeV1ListApiCategoriesResponse
/** 
 * the response for ListApiCategoriesRequest.
**/
export class GoogleCloudApigeeV1ListApiCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GoogleCloudApigeeV1ApiCategoryData })
  data?: GoogleCloudApigeeV1ApiCategoryData[];

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
