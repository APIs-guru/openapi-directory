import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementClientIdHashClientIdQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementClientIdHashClientIdSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementClientIdHashClientIdSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementClientIdHashClientIdSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementClientIdHashClientIdSecurityOption1;
    option2?: AnalyticsManagementClientIdHashClientIdSecurityOption2;
}
export declare class AnalyticsManagementClientIdHashClientIdRequest extends SpeakeasyBase {
    queryParams: AnalyticsManagementClientIdHashClientIdQueryParams;
    request?: shared.HashClientIdRequest;
    security: AnalyticsManagementClientIdHashClientIdSecurity;
}
export declare class AnalyticsManagementClientIdHashClientIdResponse extends SpeakeasyBase {
    contentType: string;
    hashClientIdResponse?: shared.HashClientIdResponse;
    statusCode: number;
}
