import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesEnrollmentTokensCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensCreateRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesEnrollmentTokensCreatePathParams;
    queryParams: AndroidmanagementEnterprisesEnrollmentTokensCreateQueryParams;
    request?: shared.EnrollmentToken;
    security: AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensCreateResponse extends SpeakeasyBase {
    contentType: string;
    enrollmentToken?: shared.EnrollmentToken;
    statusCode: number;
}
