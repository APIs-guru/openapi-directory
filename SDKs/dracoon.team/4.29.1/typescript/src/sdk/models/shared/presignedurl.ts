import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PresignedUrl
/** 
 * Presigned URL information
**/
export class PresignedUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partNumber" })
  partNumber: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
