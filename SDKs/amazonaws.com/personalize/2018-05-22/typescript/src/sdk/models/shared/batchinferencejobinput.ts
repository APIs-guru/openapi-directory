import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3DataConfig } from "./s3dataconfig";



// BatchInferenceJobInput
/** 
 * The input configuration of a batch inference job.
**/
export class BatchInferenceJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3DataSource" })
  s3DataSource: S3DataConfig;
}
