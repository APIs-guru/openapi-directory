import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesGenerateSignupUrlQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    callbackUrl?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesGenerateSignupUrlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesGenerateSignupUrlRequest extends SpeakeasyBase {
    queryParams: AndroidenterpriseEnterprisesGenerateSignupUrlQueryParams;
    security: AndroidenterpriseEnterprisesGenerateSignupUrlSecurity;
}
export declare class AndroidenterpriseEnterprisesGenerateSignupUrlResponse extends SpeakeasyBase {
    contentType: string;
    signupInfo?: shared.SignupInfo;
    statusCode: number;
}
