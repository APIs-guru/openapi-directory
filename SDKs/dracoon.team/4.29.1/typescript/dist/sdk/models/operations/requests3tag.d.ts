import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestS3TagPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RequestS3TagHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestS3TagRequest extends SpeakeasyBase {
    pathParams: RequestS3TagPathParams;
    headers: RequestS3TagHeaders;
}
export declare class RequestS3TagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3Tag?: shared.S3Tag;
    statusCode: number;
}
