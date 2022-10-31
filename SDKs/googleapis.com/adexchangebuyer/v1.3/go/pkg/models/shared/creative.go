package shared

import (
"time")

type CreativeAdTechnologyProviders struct {
    DetectedProviderIds []string `json:"detectedProviderIds,omitempty"`
    HasUnidentifiedProvider *bool `json:"hasUnidentifiedProvider,omitempty"`
    
}

type CreativeCorrections struct {
    Details []string `json:"details,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

type CreativeDisapprovalReasons struct {
    Details []string `json:"details,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

type CreativeFilteringReasonsReasons struct {
    FilteringCount *string `json:"filteringCount,omitempty"`
    FilteringStatus *int32 `json:"filteringStatus,omitempty"`
    
}

type CreativeFilteringReasons struct {
    Date *string `json:"date,omitempty"`
    Reasons []CreativeFilteringReasonsReasons `json:"reasons,omitempty"`
    
}

type CreativeNativeAdAppIcon struct {
    Height *int32 `json:"height,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

type CreativeNativeAdImage struct {
    Height *int32 `json:"height,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

type CreativeNativeAdLogo struct {
    Height *int32 `json:"height,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

type CreativeNativeAd struct {
    Advertiser *string `json:"advertiser,omitempty"`
    AppIcon *CreativeNativeAdAppIcon `json:"appIcon,omitempty"`
    Body *string `json:"body,omitempty"`
    CallToAction *string `json:"callToAction,omitempty"`
    ClickTrackingURL *string `json:"clickTrackingUrl,omitempty"`
    Headline *string `json:"headline,omitempty"`
    Image *CreativeNativeAdImage `json:"image,omitempty"`
    ImpressionTrackingURL []string `json:"impressionTrackingUrl,omitempty"`
    Logo *CreativeNativeAdLogo `json:"logo,omitempty"`
    Price *string `json:"price,omitempty"`
    StarRating *float64 `json:"starRating,omitempty"`
    
}

type Creative struct {
    HTMLSnippet *string `json:"HTMLSnippet,omitempty"`
    AccountID *int32 `json:"accountId,omitempty"`
    AdTechnologyProviders *CreativeAdTechnologyProviders `json:"adTechnologyProviders,omitempty"`
    AdvertiserID []string `json:"advertiserId,omitempty"`
    AdvertiserName *string `json:"advertiserName,omitempty"`
    AgencyID *string `json:"agencyId,omitempty"`
    APIUploadTimestamp *time.Time `json:"apiUploadTimestamp,omitempty"`
    Attribute []int32 `json:"attribute,omitempty"`
    BuyerCreativeID *string `json:"buyerCreativeId,omitempty"`
    ClickThroughURL []string `json:"clickThroughUrl,omitempty"`
    Corrections []CreativeCorrections `json:"corrections,omitempty"`
    DisapprovalReasons []CreativeDisapprovalReasons `json:"disapprovalReasons,omitempty"`
    FilteringReasons *CreativeFilteringReasons `json:"filteringReasons,omitempty"`
    Height *int32 `json:"height,omitempty"`
    ImpressionTrackingURL []string `json:"impressionTrackingUrl,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NativeAd *CreativeNativeAd `json:"nativeAd,omitempty"`
    ProductCategories []int32 `json:"productCategories,omitempty"`
    RestrictedCategories []int32 `json:"restrictedCategories,omitempty"`
    SensitiveCategories []int32 `json:"sensitiveCategories,omitempty"`
    Status *string `json:"status,omitempty"`
    VendorType []int32 `json:"vendorType,omitempty"`
    Version *int32 `json:"version,omitempty"`
    VideoURL *string `json:"videoURL,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

