import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataConfig } from "./s3dataconfig";
/**
 * The input configuration of a batch inference job.
**/
export declare class BatchInferenceJobInput extends SpeakeasyBase {
    s3DataSource: S3DataConfig;
}
