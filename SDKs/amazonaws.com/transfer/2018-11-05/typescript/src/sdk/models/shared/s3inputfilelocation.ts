import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3InputFileLocation
/** 
 * Specifies the details for the S3 file being copied.
**/
export class S3InputFileLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;
}
