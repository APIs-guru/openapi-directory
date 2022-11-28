import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails } from "./googleanalyticsadminv1alphalinkproposalstatusdetails";
/**
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
export declare class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    advertiserId?: string;
    campaignDataSharingEnabled?: boolean;
    costDataSharingEnabled?: boolean;
    validationEmail?: string;
}
/**
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
export declare class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    advertiserDisplayName?: string;
    advertiserId?: string;
    campaignDataSharingEnabled?: boolean;
    costDataSharingEnabled?: boolean;
    linkProposalStatusDetails?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;
    name?: string;
    validationEmail?: string;
}
