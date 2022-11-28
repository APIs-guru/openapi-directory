import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminAccountSummariesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminAccountSummariesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminAccountSummariesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminAccountSummariesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminAccountSummariesListSecurityOption1;
    option2?: AnalyticsadminAccountSummariesListSecurityOption2;
}
export declare class AnalyticsadminAccountSummariesListRequest extends SpeakeasyBase {
    queryParams: AnalyticsadminAccountSummariesListQueryParams;
    security: AnalyticsadminAccountSummariesListSecurity;
}
export declare class AnalyticsadminAccountSummariesListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListAccountSummariesResponse?: shared.GoogleAnalyticsAdminV1alphaListAccountSummariesResponse;
    statusCode: number;
}
