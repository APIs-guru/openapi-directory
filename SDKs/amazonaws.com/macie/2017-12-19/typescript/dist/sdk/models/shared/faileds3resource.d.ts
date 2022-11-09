import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Resource } from "./s3resource";
/**
 * Includes details about the failed S3 resources.
**/
export declare class FailedS3Resource extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    failedItem?: S3Resource;
}
