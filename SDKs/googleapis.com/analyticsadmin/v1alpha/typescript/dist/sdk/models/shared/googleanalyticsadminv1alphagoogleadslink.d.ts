import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link between a GA4 property and a Google Ads account.
**/
export declare class GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    customerId?: string;
}
/**
 * A link between a GA4 property and a Google Ads account.
**/
export declare class GoogleAnalyticsAdminV1alphaGoogleAdsLink extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    canManageClients?: boolean;
    createTime?: string;
    creatorEmailAddress?: string;
    customerId?: string;
    name?: string;
    updateTime?: string;
}
