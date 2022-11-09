import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataConfig } from "./s3dataconfig";


// BatchInferenceJobOutput
/** 
 * The output configuration parameters of a batch inference job.
**/
export class BatchInferenceJobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3DataDestination" })
  s3DataDestination: S3DataConfig;
}
