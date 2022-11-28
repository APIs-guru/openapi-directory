import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminAccountsSearchChangeHistoryEventsPathParams extends SpeakeasyBase {
    account: string;
}
export declare class AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminAccountsSearchChangeHistoryEventsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminAccountsSearchChangeHistoryEventsRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminAccountsSearchChangeHistoryEventsPathParams;
    queryParams: AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest;
    security: AnalyticsadminAccountsSearchChangeHistoryEventsSecurity;
}
export declare class AnalyticsadminAccountsSearchChangeHistoryEventsResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse?: shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse;
    statusCode: number;
}
