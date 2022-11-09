import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes an update for the Amazon S3 code content location for an application.
**/
export declare class S3ContentLocationUpdate extends SpeakeasyBase {
    bucketArnUpdate?: string;
    fileKeyUpdate?: string;
    objectVersionUpdate?: string;
}
