import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileKey } from "./filekey";
import { UserFileKeyList } from "./userfilekeylist";

export enum CompleteUploadRequestResolutionStrategyEnum {
    Autorename = "autorename"
,    Overwrite = "overwrite"
,    Fail = "fail"
}


// CompleteUploadRequest
/** 
 * Request model for completing an upload
**/
export class CompleteUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: CompleteUploadRequestResolutionStrategyEnum;

  @Metadata({ data: "json, name=userFileKeyList" })
  userFileKeyList?: UserFileKeyList;
}
