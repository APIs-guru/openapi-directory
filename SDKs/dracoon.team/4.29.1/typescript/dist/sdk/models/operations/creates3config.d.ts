import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateS3ConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateS3ConfigRequest extends SpeakeasyBase {
    headers: CreateS3ConfigHeaders;
    request: shared.S3ConfigCreateRequest;
}
export declare class CreateS3ConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3Config?: shared.S3Config;
    statusCode: number;
}
