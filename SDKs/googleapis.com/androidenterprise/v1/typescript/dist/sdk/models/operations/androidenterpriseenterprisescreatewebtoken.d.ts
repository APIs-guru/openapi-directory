import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesCreateWebTokenPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesCreateWebTokenQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEnterprisesCreateWebTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesCreateWebTokenRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesCreateWebTokenPathParams;
    queryParams: AndroidenterpriseEnterprisesCreateWebTokenQueryParams;
    request?: shared.AdministratorWebTokenSpec;
    security: AndroidenterpriseEnterprisesCreateWebTokenSecurity;
}
export declare class AndroidenterpriseEnterprisesCreateWebTokenResponse extends SpeakeasyBase {
    administratorWebToken?: shared.AdministratorWebToken;
    contentType: string;
    statusCode: number;
}
