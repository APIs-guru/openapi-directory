import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams;
    queryParams: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams;
    request?: Map<string, any>;
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity;
}
export declare class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse?: shared.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse;
    statusCode: number;
}
