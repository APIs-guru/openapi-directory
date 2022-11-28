import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputDataConfig
/** 
 * The input configuration properties for requesting a batch translation job.
**/
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
