import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { S3FileUploadPart } from "./s3fileuploadpart";


export enum CompleteS3FileUploadRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}


// CompleteS3FileUploadRequest
/** 
 * Request model for completing a S3 file upload
**/
export class CompleteS3FileUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: S3FileUploadPart })
  parts: S3FileUploadPart[];

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategyEnum;
}
