import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchema } from "./apprestrictionsschema";
import { TrackInfo } from "./trackinfo";
import { AppVersion } from "./appversion";
import { ProductPermission } from "./productpermission";
import { ProductSigningCertificate } from "./productsigningcertificate";
export declare enum ProductAvailableTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
export declare enum ProductContentRatingEnum {
    RatingUnknown = "ratingUnknown",
    All = "all",
    PreTeen = "preTeen",
    Teen = "teen",
    Mature = "mature"
}
export declare enum ProductDistributionChannelEnum {
    PublicGoogleHosted = "publicGoogleHosted",
    PrivateGoogleHosted = "privateGoogleHosted",
    PrivateSelfHosted = "privateSelfHosted"
}
export declare enum ProductFeaturesEnum {
    FeatureUnknown = "featureUnknown",
    VpnApp = "vpnApp"
}
export declare enum ProductProductPricingEnum {
    Unknown = "unknown",
    Free = "free",
    FreeWithInAppPurchase = "freeWithInAppPurchase",
    Paid = "paid"
}
/**
 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
**/
export declare class Product extends SpeakeasyBase {
    appRestrictionsSchema?: AppRestrictionsSchema;
    appTracks?: TrackInfo[];
    appVersion?: AppVersion[];
    authorName?: string;
    availableCountries?: string[];
    availableTracks?: ProductAvailableTracksEnum[];
    category?: string;
    contentRating?: ProductContentRatingEnum;
    description?: string;
    detailsUrl?: string;
    distributionChannel?: ProductDistributionChannelEnum;
    features?: ProductFeaturesEnum[];
    iconUrl?: string;
    lastUpdatedTimestampMillis?: string;
    minAndroidSdkVersion?: number;
    permissions?: ProductPermission[];
    productId?: string;
    productPricing?: ProductProductPricingEnum;
    recentChanges?: string;
    requiresContainerApp?: boolean;
    screenshotUrls?: string[];
    signingCertificate?: ProductSigningCertificate;
    smallIconUrl?: string;
    title?: string;
    workDetailsUrl?: string;
}
