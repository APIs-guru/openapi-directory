import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsGetAuthorizationPathParams extends SpeakeasyBase {
    authorizationId: number;
}
export declare class OauthAuthorizationsGetAuthorizationRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsGetAuthorizationPathParams;
}
export declare class OauthAuthorizationsGetAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
    basicError?: shared.BasicError;
}
