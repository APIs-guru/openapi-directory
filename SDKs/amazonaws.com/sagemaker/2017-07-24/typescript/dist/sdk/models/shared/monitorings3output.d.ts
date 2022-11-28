import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3UploadModeEnum } from "./processings3uploadmodeenum";
/**
 * Information about where and how you want to store the results of a monitoring job.
**/
export declare class MonitoringS3Output extends SpeakeasyBase {
    localPath: string;
    s3UploadMode?: ProcessingS3UploadModeEnum;
    s3Uri: string;
}
