import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestLogOperationsQueryParams extends SpeakeasyBase {
    isDeprecated?: boolean;
}
export declare class RequestLogOperationsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestLogOperationsRequest extends SpeakeasyBase {
    queryParams: RequestLogOperationsQueryParams;
    headers: RequestLogOperationsHeaders;
}
export declare class RequestLogOperationsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    logOperationList?: shared.LogOperationList;
    statusCode: number;
}
