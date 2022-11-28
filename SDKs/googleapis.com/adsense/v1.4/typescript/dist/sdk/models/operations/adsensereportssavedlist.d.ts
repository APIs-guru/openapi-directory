import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseReportsSavedListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseReportsSavedListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseReportsSavedListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseReportsSavedListSecurity extends SpeakeasyBase {
    option1?: AdsenseReportsSavedListSecurityOption1;
    option2?: AdsenseReportsSavedListSecurityOption2;
}
export declare class AdsenseReportsSavedListRequest extends SpeakeasyBase {
    queryParams: AdsenseReportsSavedListQueryParams;
    security: AdsenseReportsSavedListSecurity;
}
export declare class AdsenseReportsSavedListResponse extends SpeakeasyBase {
    contentType: string;
    savedReports?: shared.SavedReports;
    statusCode: number;
}
