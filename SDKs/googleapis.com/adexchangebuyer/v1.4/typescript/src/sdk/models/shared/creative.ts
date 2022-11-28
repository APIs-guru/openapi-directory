import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreativeAdTechnologyProviders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedProviderIds" })
  detectedProviderIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasUnidentifiedProvider" })
  hasUnidentifiedProvider?: boolean;
}


export class CreativeCorrectionsContexts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auctionType" })
  auctionType?: string[];

  @SpeakeasyMetadata({ data: "json, name=contextType" })
  contextType?: string;

  @SpeakeasyMetadata({ data: "json, name=geoCriteriaId" })
  geoCriteriaId?: number[];

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string[];
}


export class CreativeCorrections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: CreativeCorrectionsContexts })
  contexts?: CreativeCorrectionsContexts[];

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreativeFilteringReasonsReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filteringCount" })
  filteringCount?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringStatus" })
  filteringStatus?: number;
}


// CreativeFilteringReasons
/** 
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
export class CreativeFilteringReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: CreativeFilteringReasonsReasons })
  reasons?: CreativeFilteringReasonsReasons[];
}


// CreativeNativeAdAppIcon
/** 
 * The app icon, for app download ads.
**/
export class CreativeNativeAdAppIcon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// CreativeNativeAdImage
/** 
 * A large image.
**/
export class CreativeNativeAdImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// CreativeNativeAdLogo
/** 
 * A smaller image, for the advertiser logo.
**/
export class CreativeNativeAdLogo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// CreativeNativeAd
/** 
 * If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
**/
export class CreativeNativeAd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiser" })
  advertiser?: string;

  @SpeakeasyMetadata({ data: "json, name=appIcon" })
  appIcon?: CreativeNativeAdAppIcon;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=callToAction" })
  callToAction?: string;

  @SpeakeasyMetadata({ data: "json, name=clickLinkUrl" })
  clickLinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: CreativeNativeAdImage;

  @SpeakeasyMetadata({ data: "json, name=impressionTrackingUrl" })
  impressionTrackingUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: CreativeNativeAdLogo;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=starRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=videoURL" })
  videoUrl?: string;
}


export class CreativeServingRestrictionsContexts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auctionType" })
  auctionType?: string[];

  @SpeakeasyMetadata({ data: "json, name=contextType" })
  contextType?: string;

  @SpeakeasyMetadata({ data: "json, name=geoCriteriaId" })
  geoCriteriaId?: number[];

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string[];
}


export class CreativeServingRestrictionsDisapprovalReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreativeServingRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: CreativeServingRestrictionsContexts })
  contexts?: CreativeServingRestrictionsContexts[];

  @SpeakeasyMetadata({ data: "json, name=disapprovalReasons", elemType: CreativeServingRestrictionsDisapprovalReasons })
  disapprovalReasons?: CreativeServingRestrictionsDisapprovalReasons[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


// Creative
/** 
 * A creative and its classification data.
**/
export class Creative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HTMLSnippet" })
  htmlSnippet?: string;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=adChoicesDestinationUrl" })
  adChoicesDestinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=adTechnologyProviders" })
  adTechnologyProviders?: CreativeAdTechnologyProviders;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string[];

  @SpeakeasyMetadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @SpeakeasyMetadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=apiUploadTimestamp" })
  apiUploadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: number[];

  @SpeakeasyMetadata({ data: "json, name=buyerCreativeId" })
  buyerCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=corrections", elemType: CreativeCorrections })
  corrections?: CreativeCorrections[];

  @SpeakeasyMetadata({ data: "json, name=creativeStatusIdentityType" })
  creativeStatusIdentityType?: string;

  @SpeakeasyMetadata({ data: "json, name=dealsStatus" })
  dealsStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=detectedDomains" })
  detectedDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=filteringReasons" })
  filteringReasons?: CreativeFilteringReasons;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=impressionTrackingUrl" })
  impressionTrackingUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=nativeAd" })
  nativeAd?: CreativeNativeAd;

  @SpeakeasyMetadata({ data: "json, name=openAuctionStatus" })
  openAuctionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategories" })
  productCategories?: number[];

  @SpeakeasyMetadata({ data: "json, name=restrictedCategories" })
  restrictedCategories?: number[];

  @SpeakeasyMetadata({ data: "json, name=sensitiveCategories" })
  sensitiveCategories?: number[];

  @SpeakeasyMetadata({ data: "json, name=servingRestrictions", elemType: CreativeServingRestrictions })
  servingRestrictions?: CreativeServingRestrictions[];

  @SpeakeasyMetadata({ data: "json, name=vendorType" })
  vendorType?: number[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=videoURL" })
  videoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=videoVastXML" })
  videoVastXml?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
