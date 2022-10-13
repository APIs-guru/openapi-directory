package shared

import (
	"time"
)

type OfferAvailabilityEnum string

const (
	OfferAvailabilityEnumAvailable  OfferAvailabilityEnum = "Available"
	OfferAvailabilityEnumComingSoon OfferAvailabilityEnum = "ComingSoon"
)

type OfferDeliveryTypeEnum string

const (
	OfferDeliveryTypeEnumStream              OfferDeliveryTypeEnum = "Stream"
	OfferDeliveryTypeEnumDownload            OfferDeliveryTypeEnum = "Download"
	OfferDeliveryTypeEnumStreamOrDownload    OfferDeliveryTypeEnum = "StreamOrDownload"
	OfferDeliveryTypeEnumProgressiveDownload OfferDeliveryTypeEnum = "ProgressiveDownload"
	OfferDeliveryTypeEnumNone                OfferDeliveryTypeEnum = "None"
)

type OfferOwnershipEnum string

const (
	OfferOwnershipEnumSubscription OfferOwnershipEnum = "Subscription"
	OfferOwnershipEnumFree         OfferOwnershipEnum = "Free"
	OfferOwnershipEnumRent         OfferOwnershipEnum = "Rent"
	OfferOwnershipEnumOwn          OfferOwnershipEnum = "Own"
	OfferOwnershipEnumNone         OfferOwnershipEnum = "None"
)

type OfferResolutionEnum string

const (
	OfferResolutionEnumSd       OfferResolutionEnum = "SD"
	OfferResolutionEnumHd720    OfferResolutionEnum = "HD-720"
	OfferResolutionEnumHd1080   OfferResolutionEnum = "HD-1080"
	OfferResolutionEnumHd4K     OfferResolutionEnum = "HD-4K"
	OfferResolutionEnumExternal OfferResolutionEnum = "External"
	OfferResolutionEnumUnknown  OfferResolutionEnum = "Unknown"
)

type Offer struct {
	Availability     OfferAvailabilityEnum  `json:"availability"`
	CustomFields     map[string]interface{} `json:"customFields"`
	DeliveryType     OfferDeliveryTypeEnum  `json:"deliveryType"`
	EndDate          *time.Time             `json:"endDate"`
	ExclusionRules   []ExclusionRule        `json:"exclusionRules"`
	ID               *string                `json:"id"`
	MaxDownloads     *int32                 `json:"maxDownloads"`
	MaxPlays         *int32                 `json:"maxPlays"`
	Name             *string                `json:"name"`
	Ownership        OfferOwnershipEnum     `json:"ownership"`
	PlayPeriod       *int32                 `json:"playPeriod"`
	Price            float32                `json:"price"`
	RentalPeriod     *int32                 `json:"rentalPeriod"`
	Resolution       OfferResolutionEnum    `json:"resolution"`
	Scopes           []string               `json:"scopes"`
	StartDate        *time.Time             `json:"startDate"`
	SubscriptionCode *string                `json:"subscriptionCode"`
}
