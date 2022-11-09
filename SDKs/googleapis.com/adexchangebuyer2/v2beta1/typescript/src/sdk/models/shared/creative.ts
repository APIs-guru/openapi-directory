import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { Correction } from "./correction";
import { HtmlContent } from "./htmlcontent";
import { NativeContent } from "./nativecontent";
import { ServingRestriction } from "./servingrestriction";
import { VideoContent } from "./videocontent";

export enum CreativeAttributesEnum {
    AttributeUnspecified = "ATTRIBUTE_UNSPECIFIED"
,    ImageRichMedia = "IMAGE_RICH_MEDIA"
,    AdobeFlashFlv = "ADOBE_FLASH_FLV"
,    IsTagged = "IS_TAGGED"
,    IsCookieTargeted = "IS_COOKIE_TARGETED"
,    IsUserInterestTargeted = "IS_USER_INTEREST_TARGETED"
,    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE"
,    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP"
,    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN"
,    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT"
,    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT"
,    ExpandingDirectionUpLeft = "EXPANDING_DIRECTION_UP_LEFT"
,    ExpandingDirectionUpRight = "EXPANDING_DIRECTION_UP_RIGHT"
,    ExpandingDirectionDownLeft = "EXPANDING_DIRECTION_DOWN_LEFT"
,    ExpandingDirectionDownRight = "EXPANDING_DIRECTION_DOWN_RIGHT"
,    CreativeTypeHtml = "CREATIVE_TYPE_HTML"
,    CreativeTypeVastVideo = "CREATIVE_TYPE_VAST_VIDEO"
,    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN"
,    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
,    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL"
,    ExpandingActionRolloverToExpand = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
,    InstreamVastVideoTypeVpaidFlash = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
,    RichMediaCapabilityTypeMraid = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
,    RichMediaCapabilityTypeFlash = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
,    RichMediaCapabilityTypeHtml5 = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
,    SkippableInstreamVideo = "SKIPPABLE_INSTREAM_VIDEO"
,    RichMediaCapabilityTypeSsl = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
,    RichMediaCapabilityTypeNonSsl = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
,    RichMediaCapabilityTypeInterstitial = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
,    NonSkippableInstreamVideo = "NON_SKIPPABLE_INSTREAM_VIDEO"
,    NativeEligibilityEligible = "NATIVE_ELIGIBILITY_ELIGIBLE"
,    NonVpaid = "NON_VPAID"
,    NativeEligibilityNotEligible = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
,    AnyInterstitial = "ANY_INTERSTITIAL"
,    NonInterstitial = "NON_INTERSTITIAL"
,    InBannerVideo = "IN_BANNER_VIDEO"
,    RenderingSizelessAdx = "RENDERING_SIZELESS_ADX"
,    Omsdk10 = "OMSDK_1_0"
}

export enum CreativeDealsStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    NotChecked = "NOT_CHECKED"
,    ConditionallyApproved = "CONDITIONALLY_APPROVED"
,    Approved = "APPROVED"
,    Disapproved = "DISAPPROVED"
,    PendingReview = "PENDING_REVIEW"
,    StatusTypeUnspecified = "STATUS_TYPE_UNSPECIFIED"
}

export enum CreativeOpenAuctionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    NotChecked = "NOT_CHECKED"
,    ConditionallyApproved = "CONDITIONALLY_APPROVED"
,    Approved = "APPROVED"
,    Disapproved = "DISAPPROVED"
,    PendingReview = "PENDING_REVIEW"
,    StatusTypeUnspecified = "STATUS_TYPE_UNSPECIFIED"
}

export enum CreativeRestrictedCategoriesEnum {
    NoRestrictedCategories = "NO_RESTRICTED_CATEGORIES"
,    Alcohol = "ALCOHOL"
}


// Creative
/** 
 * A creative and its classification data.
**/
export class Creative extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=adChoicesDestinationUrl" })
  adChoicesDestinationUrl?: string;

  @Metadata({ data: "json, name=adTechnologyProviders" })
  adTechnologyProviders?: AdTechnologyProviders;

  @Metadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @Metadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @Metadata({ data: "json, name=apiUpdateTime" })
  apiUpdateTime?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: CreativeAttributesEnum[];

  @Metadata({ data: "json, name=clickThroughUrls" })
  clickThroughUrls?: string[];

  @Metadata({ data: "json, name=corrections", elemType: shared.Correction })
  corrections?: Correction[];

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=dealsStatus" })
  dealsStatus?: CreativeDealsStatusEnum;

  @Metadata({ data: "json, name=declaredClickThroughUrls" })
  declaredClickThroughUrls?: string[];

  @Metadata({ data: "json, name=detectedAdvertiserIds" })
  detectedAdvertiserIds?: string[];

  @Metadata({ data: "json, name=detectedDomains" })
  detectedDomains?: string[];

  @Metadata({ data: "json, name=detectedLanguages" })
  detectedLanguages?: string[];

  @Metadata({ data: "json, name=detectedProductCategories" })
  detectedProductCategories?: number[];

  @Metadata({ data: "json, name=detectedSensitiveCategories" })
  detectedSensitiveCategories?: number[];

  @Metadata({ data: "json, name=html" })
  html?: HtmlContent;

  @Metadata({ data: "json, name=impressionTrackingUrls" })
  impressionTrackingUrls?: string[];

  @Metadata({ data: "json, name=native" })
  native?: NativeContent;

  @Metadata({ data: "json, name=openAuctionStatus" })
  openAuctionStatus?: CreativeOpenAuctionStatusEnum;

  @Metadata({ data: "json, name=restrictedCategories" })
  restrictedCategories?: CreativeRestrictedCategoriesEnum[];

  @Metadata({ data: "json, name=servingRestrictions", elemType: shared.ServingRestriction })
  servingRestrictions?: ServingRestriction[];

  @Metadata({ data: "json, name=vendorIds" })
  vendorIds?: number[];

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=video" })
  video?: VideoContent;
}
