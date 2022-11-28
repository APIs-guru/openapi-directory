import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersGenerateAuthenticationTokenPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseUsersGenerateAuthenticationTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersGenerateAuthenticationTokenRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersGenerateAuthenticationTokenPathParams;
    queryParams: AndroidenterpriseUsersGenerateAuthenticationTokenQueryParams;
    security: AndroidenterpriseUsersGenerateAuthenticationTokenSecurity;
}
export declare class AndroidenterpriseUsersGenerateAuthenticationTokenResponse extends SpeakeasyBase {
    authenticationToken?: shared.AuthenticationToken;
    contentType: string;
    statusCode: number;
}
