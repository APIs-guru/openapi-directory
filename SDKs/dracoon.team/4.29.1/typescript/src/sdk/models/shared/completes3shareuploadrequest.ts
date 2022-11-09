import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3FileUploadPart } from "./s3fileuploadpart";
import { UserFileKey } from "./userfilekey";


// CompleteS3ShareUploadRequest
/** 
 * Request model for completing a S3 file upload
**/
export class CompleteS3ShareUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parts", elemType: shared.S3FileUploadPart })
  parts: S3FileUploadPart[];

  @Metadata({ data: "json, name=userFileKeyList", elemType: shared.UserFileKey })
  userFileKeyList?: UserFileKey[];
}
