import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserFileKeyPathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class RequestUserFileKeyQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RequestUserFileKeyHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestUserFileKeyRequest extends SpeakeasyBase {
    pathParams: RequestUserFileKeyPathParams;
    queryParams: RequestUserFileKeyQueryParams;
    headers: RequestUserFileKeyHeaders;
}
export declare class RequestUserFileKeyResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fileKey?: shared.FileKey;
    statusCode: number;
}
