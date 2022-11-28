import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { UserFileKeyList } from "./userfilekeylist";


export enum CompleteUploadRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}


// CompleteUploadRequest
/** 
 * Request model for completing an upload
**/
export class CompleteUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: CompleteUploadRequestResolutionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=userFileKeyList" })
  userFileKeyList?: UserFileKeyList;
}
