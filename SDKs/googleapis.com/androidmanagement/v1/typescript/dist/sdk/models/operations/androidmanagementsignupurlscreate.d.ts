import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementSignupUrlsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    callbackUrl?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidmanagementSignupUrlsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementSignupUrlsCreateRequest extends SpeakeasyBase {
    queryParams: AndroidmanagementSignupUrlsCreateQueryParams;
    security: AndroidmanagementSignupUrlsCreateSecurity;
}
export declare class AndroidmanagementSignupUrlsCreateResponse extends SpeakeasyBase {
    contentType: string;
    signupUrl?: shared.SignupUrl;
    statusCode: number;
}
