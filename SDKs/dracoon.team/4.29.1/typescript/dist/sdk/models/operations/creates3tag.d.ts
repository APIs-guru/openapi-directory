import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateS3TagHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateS3TagRequest extends SpeakeasyBase {
    headers: CreateS3TagHeaders;
    request: shared.S3TagCreateRequest;
}
export declare class CreateS3TagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3Tag?: shared.S3Tag;
    statusCode: number;
}
