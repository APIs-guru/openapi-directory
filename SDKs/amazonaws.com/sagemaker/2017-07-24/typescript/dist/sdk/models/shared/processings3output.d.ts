import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3UploadModeEnum } from "./processings3uploadmodeenum";
/**
 * Configuration for uploading output data to Amazon S3 from the processing container.
**/
export declare class ProcessingS3Output extends SpeakeasyBase {
    localPath: string;
    s3UploadMode: ProcessingS3UploadModeEnum;
    s3Uri: string;
}
