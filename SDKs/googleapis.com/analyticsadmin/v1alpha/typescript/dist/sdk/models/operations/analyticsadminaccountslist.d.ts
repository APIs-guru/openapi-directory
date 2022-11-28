import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminAccountsListQueryParams extends SpeakeasyBase {
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
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminAccountsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminAccountsListSecurityOption1;
    option2?: AnalyticsadminAccountsListSecurityOption2;
}
export declare class AnalyticsadminAccountsListRequest extends SpeakeasyBase {
    queryParams: AnalyticsadminAccountsListQueryParams;
    security: AnalyticsadminAccountsListSecurity;
}
export declare class AnalyticsadminAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListAccountsResponse?: shared.GoogleAnalyticsAdminV1alphaListAccountsResponse;
    statusCode: number;
}
