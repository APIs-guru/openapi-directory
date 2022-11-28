import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { S3FileUploadPart } from "./s3fileuploadpart";
export declare enum CompleteS3FileUploadRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for completing a S3 file upload
**/
export declare class CompleteS3FileUploadRequest extends SpeakeasyBase {
    fileKey?: FileKey;
    fileName?: string;
    keepShareLinks?: boolean;
    parts: S3FileUploadPart[];
    resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategyEnum;
}
