import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppRestrictionsSchema } from "./apprestrictionsschema";
import { TrackInfo } from "./trackinfo";
import { AppVersion } from "./appversion";
import { ProductPermission } from "./productpermission";
import { ProductSigningCertificate } from "./productsigningcertificate";

export enum ProductAvailableTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified"
,    Production = "production"
,    Beta = "beta"
,    Alpha = "alpha"
}

export enum ProductContentRatingEnum {
    RatingUnknown = "ratingUnknown"
,    All = "all"
,    PreTeen = "preTeen"
,    Teen = "teen"
,    Mature = "mature"
}

export enum ProductDistributionChannelEnum {
    PublicGoogleHosted = "publicGoogleHosted"
,    PrivateGoogleHosted = "privateGoogleHosted"
,    PrivateSelfHosted = "privateSelfHosted"
}

export enum ProductFeaturesEnum {
    FeatureUnknown = "featureUnknown"
,    VpnApp = "vpnApp"
}

export enum ProductProductPricingEnum {
    Unknown = "unknown"
,    Free = "free"
,    FreeWithInAppPurchase = "freeWithInAppPurchase"
,    Paid = "paid"
}


// Product
/** 
 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=appRestrictionsSchema" })
  appRestrictionsSchema?: AppRestrictionsSchema;

  @Metadata({ data: "json, name=appTracks", elemType: shared.TrackInfo })
  appTracks?: TrackInfo[];

  @Metadata({ data: "json, name=appVersion", elemType: shared.AppVersion })
  appVersion?: AppVersion[];

  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=availableCountries" })
  availableCountries?: string[];

  @Metadata({ data: "json, name=availableTracks" })
  availableTracks?: ProductAvailableTracksEnum[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=contentRating" })
  contentRating?: ProductContentRatingEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=detailsUrl" })
  detailsUrl?: string;

  @Metadata({ data: "json, name=distributionChannel" })
  distributionChannel?: ProductDistributionChannelEnum;

  @Metadata({ data: "json, name=features" })
  features?: ProductFeaturesEnum[];

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=lastUpdatedTimestampMillis" })
  lastUpdatedTimestampMillis?: string;

  @Metadata({ data: "json, name=minAndroidSdkVersion" })
  minAndroidSdkVersion?: number;

  @Metadata({ data: "json, name=permissions", elemType: shared.ProductPermission })
  permissions?: ProductPermission[];

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productPricing" })
  productPricing?: ProductProductPricingEnum;

  @Metadata({ data: "json, name=recentChanges" })
  recentChanges?: string;

  @Metadata({ data: "json, name=requiresContainerApp" })
  requiresContainerApp?: boolean;

  @Metadata({ data: "json, name=screenshotUrls" })
  screenshotUrls?: string[];

  @Metadata({ data: "json, name=signingCertificate" })
  signingCertificate?: ProductSigningCertificate;

  @Metadata({ data: "json, name=smallIconUrl" })
  smallIconUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=workDetailsUrl" })
  workDetailsUrl?: string;
}
