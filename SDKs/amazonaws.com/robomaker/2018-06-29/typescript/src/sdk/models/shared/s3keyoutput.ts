import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3KeyOutput
/** 
 * Information about S3 keys.
**/
export class S3KeyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=s3Key" })
  s3Key?: string;
}
