import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelPathParams;
    queryParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelQueryParams;
    request?: Map<string, any>;
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal?: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
    statusCode: number;
}
