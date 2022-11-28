import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    agreementAccepted?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    enterpriseToken?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    signupUrlName?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidmanagementEnterprisesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesCreateRequest extends SpeakeasyBase {
    queryParams: AndroidmanagementEnterprisesCreateQueryParams;
    request?: shared.Enterprise;
    security: AndroidmanagementEnterprisesCreateSecurity;
}
export declare class AndroidmanagementEnterprisesCreateResponse extends SpeakeasyBase {
    contentType: string;
    enterprise?: shared.Enterprise;
    statusCode: number;
}
