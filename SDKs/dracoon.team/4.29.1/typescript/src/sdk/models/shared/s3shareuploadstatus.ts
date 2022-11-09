import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorResponse } from "./errorresponse";


// S3ShareUploadStatus
/** 
 * S3 file upload status information
**/
export class S3ShareUploadStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorDetails" })
  errorDetails?: ErrorResponse;

  @Metadata({ data: "json, name=fileName" })
  fileName: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status: string;
}
