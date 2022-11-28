import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsSavedListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsReportsSavedListQueryParams extends SpeakeasyBase {
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
    listSavedReportsResponse?: shared.ListSavedReportsResponse;
    statusCode: number;
}
