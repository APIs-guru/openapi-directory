import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreatePathParams;
    queryParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput;
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink?: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
    statusCode: number;
}
