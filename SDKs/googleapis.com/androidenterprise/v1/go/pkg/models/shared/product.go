package shared

type ProductAvailableTracksEnum string

const (
	ProductAvailableTracksEnumAppTrackUnspecified ProductAvailableTracksEnum = "appTrackUnspecified"
	ProductAvailableTracksEnumProduction          ProductAvailableTracksEnum = "production"
	ProductAvailableTracksEnumBeta                ProductAvailableTracksEnum = "beta"
	ProductAvailableTracksEnumAlpha               ProductAvailableTracksEnum = "alpha"
)

type ProductContentRatingEnum string

const (
	ProductContentRatingEnumRatingUnknown ProductContentRatingEnum = "ratingUnknown"
	ProductContentRatingEnumAll           ProductContentRatingEnum = "all"
	ProductContentRatingEnumPreTeen       ProductContentRatingEnum = "preTeen"
	ProductContentRatingEnumTeen          ProductContentRatingEnum = "teen"
	ProductContentRatingEnumMature        ProductContentRatingEnum = "mature"
)

type ProductDistributionChannelEnum string

const (
	ProductDistributionChannelEnumPublicGoogleHosted  ProductDistributionChannelEnum = "publicGoogleHosted"
	ProductDistributionChannelEnumPrivateGoogleHosted ProductDistributionChannelEnum = "privateGoogleHosted"
	ProductDistributionChannelEnumPrivateSelfHosted   ProductDistributionChannelEnum = "privateSelfHosted"
)

type ProductFeaturesEnum string

const (
	ProductFeaturesEnumFeatureUnknown ProductFeaturesEnum = "featureUnknown"
	ProductFeaturesEnumVpnApp         ProductFeaturesEnum = "vpnApp"
)

type ProductProductPricingEnum string

const (
	ProductProductPricingEnumUnknown               ProductProductPricingEnum = "unknown"
	ProductProductPricingEnumFree                  ProductProductPricingEnum = "free"
	ProductProductPricingEnumFreeWithInAppPurchase ProductProductPricingEnum = "freeWithInAppPurchase"
	ProductProductPricingEnumPaid                  ProductProductPricingEnum = "paid"
)

type Product struct {
	AppRestrictionsSchema      *AppRestrictionsSchema          `json:"appRestrictionsSchema"`
	AppTracks                  []TrackInfo                     `json:"appTracks"`
	AppVersion                 []AppVersion                    `json:"appVersion"`
	AuthorName                 *string                         `json:"authorName"`
	AvailableCountries         []string                        `json:"availableCountries"`
	AvailableTracks            []ProductAvailableTracksEnum    `json:"availableTracks"`
	Category                   *string                         `json:"category"`
	ContentRating              *ProductContentRatingEnum       `json:"contentRating"`
	Description                *string                         `json:"description"`
	DetailsURL                 *string                         `json:"detailsUrl"`
	DistributionChannel        *ProductDistributionChannelEnum `json:"distributionChannel"`
	Features                   []ProductFeaturesEnum           `json:"features"`
	IconURL                    *string                         `json:"iconUrl"`
	LastUpdatedTimestampMillis *string                         `json:"lastUpdatedTimestampMillis"`
	MinAndroidSdkVersion       *int32                          `json:"minAndroidSdkVersion"`
	Permissions                []ProductPermission             `json:"permissions"`
	ProductID                  *string                         `json:"productId"`
	ProductPricing             *ProductProductPricingEnum      `json:"productPricing"`
	RecentChanges              *string                         `json:"recentChanges"`
	RequiresContainerApp       *bool                           `json:"requiresContainerApp"`
	ScreenshotUrls             []string                        `json:"screenshotUrls"`
	SigningCertificate         *ProductSigningCertificate      `json:"signingCertificate"`
	SmallIconURL               *string                         `json:"smallIconUrl"`
	Title                      *string                         `json:"title"`
	WorkDetailsURL             *string                         `json:"workDetailsUrl"`
}
