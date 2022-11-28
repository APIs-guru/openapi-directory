import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsResetAuthorizationPathParams extends SpeakeasyBase {
    accessToken: string;
    clientId: string;
}
export declare class OauthAuthorizationsResetAuthorizationRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsResetAuthorizationPathParams;
}
export declare class OauthAuthorizationsResetAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorizationWithUser?: shared.AuthorizationWithUser;
}
