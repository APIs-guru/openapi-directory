import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementExperimentsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    experimentId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementExperimentsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsDeleteSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsDeleteSecurityOption1;
    option2?: AnalyticsManagementExperimentsDeleteSecurityOption2;
}
export declare class AnalyticsManagementExperimentsDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementExperimentsDeletePathParams;
    queryParams: AnalyticsManagementExperimentsDeleteQueryParams;
    security: AnalyticsManagementExperimentsDeleteSecurity;
}
export declare class AnalyticsManagementExperimentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
