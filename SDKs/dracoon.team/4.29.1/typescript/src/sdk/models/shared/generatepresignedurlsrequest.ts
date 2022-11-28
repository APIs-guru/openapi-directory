import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneratePresignedUrlsRequest
/** 
 * Request model for generating presigned URLs
**/
export class GeneratePresignedUrlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstPartNumber" })
  firstPartNumber: number;

  @SpeakeasyMetadata({ data: "json, name=lastPartNumber" })
  lastPartNumber: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
