import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataConfig } from "./s3dataconfig";
/**
 * The output configuration parameters of a dataset export job.
**/
export declare class DatasetExportJobOutput extends SpeakeasyBase {
    s3DataDestination: S3DataConfig;
}
