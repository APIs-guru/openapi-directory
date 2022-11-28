import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesSearchAds360LinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1;
    option2?: AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesSearchAds360LinksListPathParams;
    queryParams: AnalyticsadminPropertiesSearchAds360LinksListQueryParams;
    security: AnalyticsadminPropertiesSearchAds360LinksListSecurity;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListSearchAds360LinksResponse?: shared.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse;
    statusCode: number;
}
