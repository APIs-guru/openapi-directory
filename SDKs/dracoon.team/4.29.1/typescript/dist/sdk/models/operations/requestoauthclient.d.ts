import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOAuthClientPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class RequestOAuthClientHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestOAuthClientRequest extends SpeakeasyBase {
    pathParams: RequestOAuthClientPathParams;
    headers: RequestOAuthClientHeaders;
}
export declare class RequestOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
}
