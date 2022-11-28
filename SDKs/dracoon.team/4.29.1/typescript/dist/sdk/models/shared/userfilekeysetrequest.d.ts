import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
/**
 * Request model for setting a user file key
**/
export declare class UserFileKeySetRequest extends SpeakeasyBase {
    fileId: number;
    fileKey: FileKey;
    userId: number;
}
