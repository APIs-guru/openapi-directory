import { SpeakeasyBase } from "../../../internal/utils";
import { EfsFileLocation } from "./efsfilelocation";
import { S3InputFileLocation } from "./s3inputfilelocation";
/**
 * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
**/
export declare class InputFileLocation extends SpeakeasyBase {
    efsFileLocation?: EfsFileLocation;
    s3FileLocation?: S3InputFileLocation;
}
