import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchema } from "./apprestrictionsschema";
import { TrackInfo } from "./trackinfo";
import { AppVersion } from "./appversion";
import { ProductPermission } from "./productpermission";
import { ProductSigningCertificate } from "./productsigningcertificate";


export enum ProductAvailableTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}

export enum ProductContentRatingEnum {
    RatingUnknown = "ratingUnknown",
    All = "all",
    PreTeen = "preTeen",
    Teen = "teen",
    Mature = "mature"
}

export enum ProductDistributionChannelEnum {
    PublicGoogleHosted = "publicGoogleHosted",
    PrivateGoogleHosted = "privateGoogleHosted",
    PrivateSelfHosted = "privateSelfHosted"
}

export enum ProductFeaturesEnum {
    FeatureUnknown = "featureUnknown",
    VpnApp = "vpnApp"
}

export enum ProductProductPricingEnum {
    Unknown = "unknown",
    Free = "free",
    FreeWithInAppPurchase = "freeWithInAppPurchase",
    Paid = "paid"
}


// Product
/** 
 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appRestrictionsSchema" })
  appRestrictionsSchema?: AppRestrictionsSchema;

  @SpeakeasyMetadata({ data: "json, name=appTracks", elemType: TrackInfo })
  appTracks?: TrackInfo[];

  @SpeakeasyMetadata({ data: "json, name=appVersion", elemType: AppVersion })
  appVersion?: AppVersion[];

  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=availableCountries" })
  availableCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=availableTracks" })
  availableTracks?: ProductAvailableTracksEnum[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=contentRating" })
  contentRating?: ProductContentRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=detailsUrl" })
  detailsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=distributionChannel" })
  distributionChannel?: ProductDistributionChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: ProductFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestampMillis" })
  lastUpdatedTimestampMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=minAndroidSdkVersion" })
  minAndroidSdkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: ProductPermission })
  permissions?: ProductPermission[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productPricing" })
  productPricing?: ProductProductPricingEnum;

  @SpeakeasyMetadata({ data: "json, name=recentChanges" })
  recentChanges?: string;

  @SpeakeasyMetadata({ data: "json, name=requiresContainerApp" })
  requiresContainerApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screenshotUrls" })
  screenshotUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=signingCertificate" })
  signingCertificate?: ProductSigningCertificate;

  @SpeakeasyMetadata({ data: "json, name=smallIconUrl" })
  smallIconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=workDetailsUrl" })
  workDetailsUrl?: string;
}
