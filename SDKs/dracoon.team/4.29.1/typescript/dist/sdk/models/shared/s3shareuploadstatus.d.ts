import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponse } from "./errorresponse";
/**
 * S3 file upload status information
**/
export declare class S3ShareUploadStatus extends SpeakeasyBase {
    errorDetails?: ErrorResponse;
    fileName: string;
    size?: number;
    status: string;
}
