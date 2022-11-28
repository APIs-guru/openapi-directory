import { SpeakeasyBase } from "../../../internal/utils";
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { Correction } from "./correction";
import { HtmlContent } from "./htmlcontent";
import { NativeContent } from "./nativecontent";
import { ServingRestriction } from "./servingrestriction";
import { VideoContent } from "./videocontent";
export declare enum CreativeAttributesEnum {
    AttributeUnspecified = "ATTRIBUTE_UNSPECIFIED",
    ImageRichMedia = "IMAGE_RICH_MEDIA",
    AdobeFlashFlv = "ADOBE_FLASH_FLV",
    IsTagged = "IS_TAGGED",
    IsCookieTargeted = "IS_COOKIE_TARGETED",
    IsUserInterestTargeted = "IS_USER_INTEREST_TARGETED",
    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE",
    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP",
    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN",
    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT",
    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT",
    ExpandingDirectionUpLeft = "EXPANDING_DIRECTION_UP_LEFT",
    ExpandingDirectionUpRight = "EXPANDING_DIRECTION_UP_RIGHT",
    ExpandingDirectionDownLeft = "EXPANDING_DIRECTION_DOWN_LEFT",
    ExpandingDirectionDownRight = "EXPANDING_DIRECTION_DOWN_RIGHT",
    CreativeTypeHtml = "CREATIVE_TYPE_HTML",
    CreativeTypeVastVideo = "CREATIVE_TYPE_VAST_VIDEO",
    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN",
    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT",
    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL",
    ExpandingActionRolloverToExpand = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND",
    InstreamVastVideoTypeVpaidFlash = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH",
    RichMediaCapabilityTypeMraid = "RICH_MEDIA_CAPABILITY_TYPE_MRAID",
    RichMediaCapabilityTypeFlash = "RICH_MEDIA_CAPABILITY_TYPE_FLASH",
    RichMediaCapabilityTypeHtml5 = "RICH_MEDIA_CAPABILITY_TYPE_HTML5",
    SkippableInstreamVideo = "SKIPPABLE_INSTREAM_VIDEO",
    RichMediaCapabilityTypeSsl = "RICH_MEDIA_CAPABILITY_TYPE_SSL",
    RichMediaCapabilityTypeNonSsl = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL",
    RichMediaCapabilityTypeInterstitial = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL",
    NonSkippableInstreamVideo = "NON_SKIPPABLE_INSTREAM_VIDEO",
    NativeEligibilityEligible = "NATIVE_ELIGIBILITY_ELIGIBLE",
    NonVpaid = "NON_VPAID",
    NativeEligibilityNotEligible = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE",
    AnyInterstitial = "ANY_INTERSTITIAL",
    NonInterstitial = "NON_INTERSTITIAL",
    InBannerVideo = "IN_BANNER_VIDEO",
    RenderingSizelessAdx = "RENDERING_SIZELESS_ADX",
    Omsdk10 = "OMSDK_1_0"
}
export declare enum CreativeDealsStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    NotChecked = "NOT_CHECKED",
    ConditionallyApproved = "CONDITIONALLY_APPROVED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    PendingReview = "PENDING_REVIEW",
    StatusTypeUnspecified = "STATUS_TYPE_UNSPECIFIED"
}
export declare enum CreativeOpenAuctionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    NotChecked = "NOT_CHECKED",
    ConditionallyApproved = "CONDITIONALLY_APPROVED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    PendingReview = "PENDING_REVIEW",
    StatusTypeUnspecified = "STATUS_TYPE_UNSPECIFIED"
}
export declare enum CreativeRestrictedCategoriesEnum {
    NoRestrictedCategories = "NO_RESTRICTED_CATEGORIES",
    Alcohol = "ALCOHOL"
}
/**
 * A creative and its classification data.
**/
export declare class Creative extends SpeakeasyBase {
    accountId?: string;
    adChoicesDestinationUrl?: string;
    adTechnologyProviders?: AdTechnologyProviders;
    advertiserName?: string;
    agencyId?: string;
    apiUpdateTime?: string;
    attributes?: CreativeAttributesEnum[];
    clickThroughUrls?: string[];
    corrections?: Correction[];
    creativeId?: string;
    dealsStatus?: CreativeDealsStatusEnum;
    declaredClickThroughUrls?: string[];
    detectedAdvertiserIds?: string[];
    detectedDomains?: string[];
    detectedLanguages?: string[];
    detectedProductCategories?: number[];
    detectedSensitiveCategories?: number[];
    html?: HtmlContent;
    impressionTrackingUrls?: string[];
    native?: NativeContent;
    openAuctionStatus?: CreativeOpenAuctionStatusEnum;
    restrictedCategories?: CreativeRestrictedCategoriesEnum[];
    servingRestrictions?: ServingRestriction[];
    vendorIds?: number[];
    version?: number;
    video?: VideoContent;
}
