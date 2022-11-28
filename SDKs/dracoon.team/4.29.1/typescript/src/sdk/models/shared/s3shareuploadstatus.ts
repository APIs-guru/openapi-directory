import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponse } from "./errorresponse";



// S3ShareUploadStatus
/** 
 * S3 file upload status information
**/
export class S3ShareUploadStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorDetails" })
  errorDetails?: ErrorResponse;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
