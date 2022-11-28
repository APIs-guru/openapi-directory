import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1;
    option2?: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams;
    queryParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams;
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse?: shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse;
    statusCode: number;
}
