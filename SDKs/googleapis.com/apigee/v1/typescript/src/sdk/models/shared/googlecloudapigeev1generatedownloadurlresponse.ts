import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1GenerateDownloadUrlResponse
/** 
 * Response for GenerateDownloadUrl method.
**/
export class GoogleCloudApigeeV1GenerateDownloadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUri" })
  downloadUri?: string;
}
