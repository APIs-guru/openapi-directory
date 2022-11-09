import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1ApiCategoryData } from "./googlecloudapigeev1apicategorydata";


// GoogleCloudApigeeV1ApiCategory
/** 
 * the Api category resource wrapped with response status, error_code etc.
**/
export class GoogleCloudApigeeV1ApiCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: GoogleCloudApigeeV1ApiCategoryData;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
