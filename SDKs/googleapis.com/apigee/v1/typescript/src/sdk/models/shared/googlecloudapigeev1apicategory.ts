import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiCategoryData } from "./googlecloudapigeev1apicategorydata";



// GoogleCloudApigeeV1ApiCategory
/** 
 * the Api category resource wrapped with response status, error_code etc.
**/
export class GoogleCloudApigeeV1ApiCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GoogleCloudApigeeV1ApiCategoryData;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
