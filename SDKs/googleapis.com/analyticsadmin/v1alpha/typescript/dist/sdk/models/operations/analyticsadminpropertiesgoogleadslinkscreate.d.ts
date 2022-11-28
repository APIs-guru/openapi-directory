import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesGoogleAdsLinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesGoogleAdsLinksCreatePathParams;
    queryParams: AnalyticsadminPropertiesGoogleAdsLinksCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput;
    security: AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaGoogleAdsLink?: shared.GoogleAnalyticsAdminV1alphaGoogleAdsLink;
    statusCode: number;
}
