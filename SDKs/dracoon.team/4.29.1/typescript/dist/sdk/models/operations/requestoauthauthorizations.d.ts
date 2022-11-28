import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOAuthAuthorizationsQueryParams extends SpeakeasyBase {
    filter?: string;
    sort?: string;
}
export declare class RequestOAuthAuthorizationsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestOAuthAuthorizationsRequest extends SpeakeasyBase {
    queryParams: RequestOAuthAuthorizationsQueryParams;
    headers: RequestOAuthAuthorizationsHeaders;
}
export declare class RequestOAuthAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    oAuthAuthorizations?: shared.OAuthAuthorization[];
    statusCode: number;
}
