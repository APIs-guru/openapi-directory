import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ContentLocationUpdate } from "./s3contentlocationupdate";
/**
 * Describes an update to the code of an application. Not supported for Apache Zeppelin.
**/
export declare class CodeContentUpdate extends SpeakeasyBase {
    s3ContentLocationUpdate?: S3ContentLocationUpdate;
    textContentUpdate?: string;
    zipFileContentUpdate?: string;
}
