import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { UserFileKeyList } from "./userfilekeylist";
export declare enum CompleteUploadRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for completing an upload
**/
export declare class CompleteUploadRequest extends SpeakeasyBase {
    fileKey?: FileKey;
    fileName?: string;
    keepShareLinks?: boolean;
    resolutionStrategy?: CompleteUploadRequestResolutionStrategyEnum;
    userFileKeyList?: UserFileKeyList;
}
