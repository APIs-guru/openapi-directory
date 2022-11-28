import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesRunAccessReportPathParams extends SpeakeasyBase {
    entity: string;
}
export declare class AnalyticsadminPropertiesRunAccessReportQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesRunAccessReportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesRunAccessReportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesRunAccessReportSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesRunAccessReportSecurityOption1;
    option2?: AnalyticsadminPropertiesRunAccessReportSecurityOption2;
}
export declare class AnalyticsadminPropertiesRunAccessReportRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesRunAccessReportPathParams;
    queryParams: AnalyticsadminPropertiesRunAccessReportQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaRunAccessReportRequest;
    security: AnalyticsadminPropertiesRunAccessReportSecurity;
}
export declare class AnalyticsadminPropertiesRunAccessReportResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaRunAccessReportResponse?: shared.GoogleAnalyticsAdminV1alphaRunAccessReportResponse;
    statusCode: number;
}
