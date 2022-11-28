import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemRescueKeyPathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class RequestSystemRescueKeyQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RequestSystemRescueKeyHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestSystemRescueKeyRequest extends SpeakeasyBase {
    pathParams: RequestSystemRescueKeyPathParams;
    queryParams: RequestSystemRescueKeyQueryParams;
    headers: RequestSystemRescueKeyHeaders;
}
export declare class RequestSystemRescueKeyResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fileKey?: shared.FileKey;
    statusCode: number;
}
