import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesGoogleAdsLinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
    option2?: AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesGoogleAdsLinksListPathParams;
    queryParams: AnalyticsadminPropertiesGoogleAdsLinksListQueryParams;
    security: AnalyticsadminPropertiesGoogleAdsLinksListSecurity;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListGoogleAdsLinksResponse?: shared.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse;
    statusCode: number;
}
