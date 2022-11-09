import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileKey } from "./filekey";
import { S3FileUploadPart } from "./s3fileuploadpart";

export enum CompleteS3FileUploadRequestResolutionStrategyEnum {
    Autorename = "autorename"
,    Overwrite = "overwrite"
,    Fail = "fail"
}


// CompleteS3FileUploadRequest
/** 
 * Request model for completing a S3 file upload
**/
export class CompleteS3FileUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @Metadata({ data: "json, name=parts", elemType: shared.S3FileUploadPart })
  parts: S3FileUploadPart[];

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategyEnum;
}
