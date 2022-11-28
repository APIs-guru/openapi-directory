import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3FileUploadPart } from "./s3fileuploadpart";
import { UserFileKey } from "./userfilekey";



// CompleteS3ShareUploadRequest
/** 
 * Request model for completing a S3 file upload
**/
export class CompleteS3ShareUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parts", elemType: S3FileUploadPart })
  parts: S3FileUploadPart[];

  @SpeakeasyMetadata({ data: "json, name=userFileKeyList", elemType: UserFileKey })
  userFileKeyList?: UserFileKey[];
}
