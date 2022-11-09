import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorResponse } from "./errorresponse";
import { Node } from "./node";


// S3FileUploadStatus
/** 
 * S3 file upload status information
**/
export class S3FileUploadStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorDetails" })
  errorDetails?: ErrorResponse;

  @Metadata({ data: "json, name=node" })
  node?: Node;

  @Metadata({ data: "json, name=status" })
  status: string;
}
