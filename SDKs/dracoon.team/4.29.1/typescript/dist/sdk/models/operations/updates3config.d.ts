import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateS3ConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateS3ConfigRequest extends SpeakeasyBase {
    headers: UpdateS3ConfigHeaders;
    request: shared.S3ConfigUpdateRequest;
}
export declare class UpdateS3ConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3Config?: shared.S3Config;
    statusCode: number;
}
