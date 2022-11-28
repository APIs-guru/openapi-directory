import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOAuthAuthorizationPathParams extends SpeakeasyBase {
    authorizationId: number;
    clientId: string;
}
export declare class RemoveOAuthAuthorizationHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveOAuthAuthorizationRequest extends SpeakeasyBase {
    pathParams: RemoveOAuthAuthorizationPathParams;
    headers: RemoveOAuthAuthorizationHeaders;
}
export declare class RemoveOAuthAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
