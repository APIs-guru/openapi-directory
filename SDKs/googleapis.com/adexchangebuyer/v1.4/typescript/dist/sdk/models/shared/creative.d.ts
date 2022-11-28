import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreativeAdTechnologyProviders extends SpeakeasyBase {
    detectedProviderIds?: string[];
    hasUnidentifiedProvider?: boolean;
}
export declare class CreativeCorrectionsContexts extends SpeakeasyBase {
    auctionType?: string[];
    contextType?: string;
    geoCriteriaId?: number[];
    platform?: string[];
}
export declare class CreativeCorrections extends SpeakeasyBase {
    contexts?: CreativeCorrectionsContexts[];
    details?: string[];
    reason?: string;
}
export declare class CreativeFilteringReasonsReasons extends SpeakeasyBase {
    filteringCount?: string;
    filteringStatus?: number;
}
/**
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
export declare class CreativeFilteringReasons extends SpeakeasyBase {
    date?: string;
    reasons?: CreativeFilteringReasonsReasons[];
}
/**
 * The app icon, for app download ads.
**/
export declare class CreativeNativeAdAppIcon extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * A large image.
**/
export declare class CreativeNativeAdImage extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * A smaller image, for the advertiser logo.
**/
export declare class CreativeNativeAdLogo extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
**/
export declare class CreativeNativeAd extends SpeakeasyBase {
    advertiser?: string;
    appIcon?: CreativeNativeAdAppIcon;
    body?: string;
    callToAction?: string;
    clickLinkUrl?: string;
    clickTrackingUrl?: string;
    headline?: string;
    image?: CreativeNativeAdImage;
    impressionTrackingUrl?: string[];
    logo?: CreativeNativeAdLogo;
    price?: string;
    starRating?: number;
    videoUrl?: string;
}
export declare class CreativeServingRestrictionsContexts extends SpeakeasyBase {
    auctionType?: string[];
    contextType?: string;
    geoCriteriaId?: number[];
    platform?: string[];
}
export declare class CreativeServingRestrictionsDisapprovalReasons extends SpeakeasyBase {
    details?: string[];
    reason?: string;
}
export declare class CreativeServingRestrictions extends SpeakeasyBase {
    contexts?: CreativeServingRestrictionsContexts[];
    disapprovalReasons?: CreativeServingRestrictionsDisapprovalReasons[];
    reason?: string;
}
/**
 * A creative and its classification data.
**/
export declare class Creative extends SpeakeasyBase {
    htmlSnippet?: string;
    accountId?: number;
    adChoicesDestinationUrl?: string;
    adTechnologyProviders?: CreativeAdTechnologyProviders;
    advertiserId?: string[];
    advertiserName?: string;
    agencyId?: string;
    apiUploadTimestamp?: Date;
    attribute?: number[];
    buyerCreativeId?: string;
    clickThroughUrl?: string[];
    corrections?: CreativeCorrections[];
    creativeStatusIdentityType?: string;
    dealsStatus?: string;
    detectedDomains?: string[];
    filteringReasons?: CreativeFilteringReasons;
    height?: number;
    impressionTrackingUrl?: string[];
    kind?: string;
    languages?: string[];
    nativeAd?: CreativeNativeAd;
    openAuctionStatus?: string;
    productCategories?: number[];
    restrictedCategories?: number[];
    sensitiveCategories?: number[];
    servingRestrictions?: CreativeServingRestrictions[];
    vendorType?: number[];
    version?: number;
    videoUrl?: string;
    videoVastXml?: string;
    width?: number;
}
