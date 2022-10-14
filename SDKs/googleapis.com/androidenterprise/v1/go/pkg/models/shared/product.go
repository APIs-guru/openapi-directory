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
	AppRestrictionsSchema      *AppRestrictionsSchema          `json:"appRestrictionsSchema,omitempty"`
	AppTracks                  []TrackInfo                     `json:"appTracks,omitempty"`
	AppVersion                 []AppVersion                    `json:"appVersion,omitempty"`
	AuthorName                 *string                         `json:"authorName,omitempty"`
	AvailableCountries         []string                        `json:"availableCountries,omitempty"`
	AvailableTracks            []ProductAvailableTracksEnum    `json:"availableTracks,omitempty"`
	Category                   *string                         `json:"category,omitempty"`
	ContentRating              *ProductContentRatingEnum       `json:"contentRating,omitempty"`
	Description                *string                         `json:"description,omitempty"`
	DetailsURL                 *string                         `json:"detailsUrl,omitempty"`
	DistributionChannel        *ProductDistributionChannelEnum `json:"distributionChannel,omitempty"`
	Features                   []ProductFeaturesEnum           `json:"features,omitempty"`
	IconURL                    *string                         `json:"iconUrl,omitempty"`
	LastUpdatedTimestampMillis *string                         `json:"lastUpdatedTimestampMillis,omitempty"`
	MinAndroidSdkVersion       *int32                          `json:"minAndroidSdkVersion,omitempty"`
	Permissions                []ProductPermission             `json:"permissions,omitempty"`
	ProductID                  *string                         `json:"productId,omitempty"`
	ProductPricing             *ProductProductPricingEnum      `json:"productPricing,omitempty"`
	RecentChanges              *string                         `json:"recentChanges,omitempty"`
	RequiresContainerApp       *bool                           `json:"requiresContainerApp,omitempty"`
	ScreenshotUrls             []string                        `json:"screenshotUrls,omitempty"`
	SigningCertificate         *ProductSigningCertificate      `json:"signingCertificate,omitempty"`
	SmallIconURL               *string                         `json:"smallIconUrl,omitempty"`
	Title                      *string                         `json:"title,omitempty"`
	WorkDetailsURL             *string                         `json:"workDetailsUrl,omitempty"`
}
