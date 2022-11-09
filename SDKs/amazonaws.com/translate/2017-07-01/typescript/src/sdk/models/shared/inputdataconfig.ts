import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputDataConfig
/** 
 * The input configuration properties for requesting a batch translation job.
**/
export class InputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentType" })
  contentType: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
