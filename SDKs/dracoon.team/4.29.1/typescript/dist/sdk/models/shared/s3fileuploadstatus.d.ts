import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponse } from "./errorresponse";
import { Node } from "./node";
/**
 * S3 file upload status information
**/
export declare class S3FileUploadStatus extends SpeakeasyBase {
    errorDetails?: ErrorResponse;
    node?: Node;
    status: string;
}
