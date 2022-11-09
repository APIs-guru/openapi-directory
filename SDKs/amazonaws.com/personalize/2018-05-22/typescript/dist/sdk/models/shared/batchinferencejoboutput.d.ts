import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataConfig } from "./s3dataconfig";
/**
 * The output configuration parameters of a batch inference job.
**/
export declare class BatchInferenceJobOutput extends SpeakeasyBase {
    s3DataDestination: S3DataConfig;
}
