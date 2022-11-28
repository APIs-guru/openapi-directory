import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksAuditPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksAuditQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksAuditSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksAuditSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksAuditSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesUserLinksAuditSecurityOption1;
    option2?: AnalyticsadminPropertiesUserLinksAuditSecurityOption2;
}
export declare class AnalyticsadminPropertiesUserLinksAuditRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksAuditPathParams;
    queryParams: AnalyticsadminPropertiesUserLinksAuditQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
    security: AnalyticsadminPropertiesUserLinksAuditSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksAuditResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaAuditUserLinksResponse?: shared.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse;
    statusCode: number;
}
