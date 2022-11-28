import { SpeakeasyBase } from "../../../internal/utils";
import { S3FileUploadPart } from "./s3fileuploadpart";
import { UserFileKey } from "./userfilekey";
/**
 * Request model for completing a S3 file upload
**/
export declare class CompleteS3ShareUploadRequest extends SpeakeasyBase {
    parts: S3FileUploadPart[];
    userFileKeyList?: UserFileKey[];
}
