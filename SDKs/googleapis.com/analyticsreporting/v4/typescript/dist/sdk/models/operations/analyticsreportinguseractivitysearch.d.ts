import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsreportingUserActivitySearchQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsreportingUserActivitySearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsreportingUserActivitySearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsreportingUserActivitySearchSecurity extends SpeakeasyBase {
    option1?: AnalyticsreportingUserActivitySearchSecurityOption1;
    option2?: AnalyticsreportingUserActivitySearchSecurityOption2;
}
export declare class AnalyticsreportingUserActivitySearchRequest extends SpeakeasyBase {
    queryParams: AnalyticsreportingUserActivitySearchQueryParams;
    request?: shared.SearchUserActivityRequest;
    security: AnalyticsreportingUserActivitySearchSecurity;
}
export declare class AnalyticsreportingUserActivitySearchResponse extends SpeakeasyBase {
    contentType: string;
    searchUserActivityResponse?: shared.SearchUserActivityResponse;
    statusCode: number;
}
