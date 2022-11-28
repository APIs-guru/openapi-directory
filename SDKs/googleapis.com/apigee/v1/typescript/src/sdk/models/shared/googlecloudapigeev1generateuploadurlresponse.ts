import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1GenerateUploadUrlResponse
/** 
 * Response for GenerateUploadUrl method.
**/
export class GoogleCloudApigeeV1GenerateUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadUri" })
  uploadUri?: string;
}
