import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link between a GA4 property and a Search Ads 360 entity.
**/
export declare class GoogleAnalyticsAdminV1alphaSearchAds360Link extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    advertiserDisplayName?: string;
    advertiserId?: string;
    campaignDataSharingEnabled?: boolean;
    costDataSharingEnabled?: boolean;
    name?: string;
    siteStatsSharingEnabled?: boolean;
}
/**
 * A link between a GA4 property and a Search Ads 360 entity.
**/
export declare class GoogleAnalyticsAdminV1alphaSearchAds360LinkInput extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    advertiserId?: string;
    campaignDataSharingEnabled?: boolean;
    costDataSharingEnabled?: boolean;
    siteStatsSharingEnabled?: boolean;
}
