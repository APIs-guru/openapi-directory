import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsCheckAuthorizationPathParams extends SpeakeasyBase {
    accessToken: string;
    clientId: string;
}
export declare class OauthAuthorizationsCheckAuthorizationRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsCheckAuthorizationPathParams;
}
export declare class OauthAuthorizationsCheckAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorizationWithUser?: shared.AuthorizationWithUser;
}
