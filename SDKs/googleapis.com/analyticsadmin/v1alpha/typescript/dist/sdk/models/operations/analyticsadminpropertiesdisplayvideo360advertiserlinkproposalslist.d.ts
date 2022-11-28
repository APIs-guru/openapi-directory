import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1;
    option2?: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams;
    queryParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams;
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse?: shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse;
    statusCode: number;
}
