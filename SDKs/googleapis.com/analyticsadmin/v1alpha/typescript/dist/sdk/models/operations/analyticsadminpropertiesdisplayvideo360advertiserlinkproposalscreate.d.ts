import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams;
    queryParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput;
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal?: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
    statusCode: number;
}
