import { SpeakeasyBase } from "../../../internal/utils";
import { EfsFileLocation } from "./efsfilelocation";
import { S3FileLocation } from "./s3filelocation";
/**
 * Specifies the Amazon S3 or EFS file details to be used in the step.
**/
export declare class FileLocation extends SpeakeasyBase {
    efsFileLocation?: EfsFileLocation;
    s3FileLocation?: S3FileLocation;
}
