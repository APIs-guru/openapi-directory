import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponse } from "./errorresponse";
import { Node } from "./node";



// S3FileUploadStatus
/** 
 * S3 file upload status information
**/
export class S3FileUploadStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorDetails" })
  errorDetails?: ErrorResponse;

  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: Node;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
