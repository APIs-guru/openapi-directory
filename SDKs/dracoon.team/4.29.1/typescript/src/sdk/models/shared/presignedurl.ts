import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PresignedUrl
/** 
 * Presigned URL information
**/
export class PresignedUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=partNumber" })
  partNumber: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}
