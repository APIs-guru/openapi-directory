import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestMissingFileKeysQueryParams extends SpeakeasyBase {
    fileId?: number;
    limit?: number;
    offset?: number;
    roomId?: number;
    useKey?: any;
    userId?: number;
}
export declare class RequestMissingFileKeysHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestMissingFileKeysRequest extends SpeakeasyBase {
    queryParams: RequestMissingFileKeysQueryParams;
    headers: RequestMissingFileKeysHeaders;
}
export declare class RequestMissingFileKeysResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    missingKeysResponse?: shared.MissingKeysResponseOutput;
    statusCode: number;
}
