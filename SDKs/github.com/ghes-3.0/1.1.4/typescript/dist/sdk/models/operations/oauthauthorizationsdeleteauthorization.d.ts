import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsDeleteAuthorizationPathParams extends SpeakeasyBase {
    authorizationId: number;
}
export declare class OauthAuthorizationsDeleteAuthorizationRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsDeleteAuthorizationPathParams;
}
export declare class OauthAuthorizationsDeleteAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
