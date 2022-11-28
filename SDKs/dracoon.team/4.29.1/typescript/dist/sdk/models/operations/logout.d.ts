import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogoutQueryParams extends SpeakeasyBase {
    everywhere?: boolean;
}
export declare class LogoutHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class LogoutRequest extends SpeakeasyBase {
    queryParams: LogoutQueryParams;
    headers: LogoutHeaders;
}
export declare class LogoutResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
