import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneratePresignedUrlsRequest
/** 
 * Request model for generating presigned URLs
**/
export class GeneratePresignedUrlsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstPartNumber" })
  firstPartNumber: number;

  @Metadata({ data: "json, name=lastPartNumber" })
  lastPartNumber: number;

  @Metadata({ data: "json, name=size" })
  size: number;
}
