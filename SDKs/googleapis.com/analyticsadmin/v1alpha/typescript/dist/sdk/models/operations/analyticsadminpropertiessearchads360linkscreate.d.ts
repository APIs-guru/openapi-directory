import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesSearchAds360LinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesSearchAds360LinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesSearchAds360LinksCreatePathParams;
    queryParams: AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaSearchAds360LinkInput;
    security: AnalyticsadminPropertiesSearchAds360LinksCreateSecurity;
}
export declare class AnalyticsadminPropertiesSearchAds360LinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaSearchAds360Link?: shared.GoogleAnalyticsAdminV1alphaSearchAds360Link;
    statusCode: number;
}
