import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3InputFileLocation
/** 
 * Specifies the details for the S3 file being copied.
**/
export class S3InputFileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;
}
