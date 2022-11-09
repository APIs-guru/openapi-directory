import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreativeAdTechnologyProviders extends SpeakeasyBase {
    detectedProviderIds?: string[];
    hasUnidentifiedProvider?: boolean;
}
export declare class CreativeCorrections extends SpeakeasyBase {
    details?: string[];
    reason?: string;
}
export declare class CreativeDisapprovalReasons extends SpeakeasyBase {
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
 * If nativeAd is set, HTMLSnippet and videoURL should not be set.
**/
export declare class CreativeNativeAd extends SpeakeasyBase {
    advertiser?: string;
    appIcon?: CreativeNativeAdAppIcon;
    body?: string;
    callToAction?: string;
    clickTrackingUrl?: string;
    headline?: string;
    image?: CreativeNativeAdImage;
    impressionTrackingUrl?: string[];
    logo?: CreativeNativeAdLogo;
    price?: string;
    starRating?: number;
}
/**
 * A creative and its classification data.
**/
export declare class Creative extends SpeakeasyBase {
    htmlSnippet?: string;
    accountId?: number;
    adTechnologyProviders?: CreativeAdTechnologyProviders;
    advertiserId?: string[];
    advertiserName?: string;
    agencyId?: string;
    apiUploadTimestamp?: Date;
    attribute?: number[];
    buyerCreativeId?: string;
    clickThroughUrl?: string[];
    corrections?: CreativeCorrections[];
    disapprovalReasons?: CreativeDisapprovalReasons[];
    filteringReasons?: CreativeFilteringReasons;
    height?: number;
    impressionTrackingUrl?: string[];
    kind?: string;
    nativeAd?: CreativeNativeAd;
    productCategories?: number[];
    restrictedCategories?: number[];
    sensitiveCategories?: number[];
    status?: string;
    vendorType?: number[];
    version?: number;
    videoUrl?: string;
    width?: number;
}
