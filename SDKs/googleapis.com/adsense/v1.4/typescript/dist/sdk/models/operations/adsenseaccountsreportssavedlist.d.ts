import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsSavedListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsReportsSavedListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsReportsSavedListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsSavedListSecurityOption1;
    option2?: AdsenseAccountsReportsSavedListSecurityOption2;
}
export declare class AdsenseAccountsReportsSavedListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsSavedListPathParams;
    queryParams: AdsenseAccountsReportsSavedListQueryParams;
    security: AdsenseAccountsReportsSavedListSecurity;
}
export declare class AdsenseAccountsReportsSavedListResponse extends SpeakeasyBase {
    contentType: string;
    savedReports?: shared.SavedReports;
    statusCode: number;
}
