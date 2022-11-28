import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesCompleteSignupQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    completionToken?: string;
    enterpriseToken?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesCompleteSignupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesCompleteSignupRequest extends SpeakeasyBase {
    queryParams: AndroidenterpriseEnterprisesCompleteSignupQueryParams;
    security: AndroidenterpriseEnterprisesCompleteSignupSecurity;
}
export declare class AndroidenterpriseEnterprisesCompleteSignupResponse extends SpeakeasyBase {
    contentType: string;
    enterprise?: shared.Enterprise;
    statusCode: number;
}
