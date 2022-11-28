import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3KeyOutput
/** 
 * Information about S3 keys.
**/
export class S3KeyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Key" })
  s3Key?: string;
}
