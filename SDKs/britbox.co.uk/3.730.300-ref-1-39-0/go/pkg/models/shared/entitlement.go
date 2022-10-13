package shared

import (
	"time"
)

type EntitlementDeliveryTypeEnum string

const (
	EntitlementDeliveryTypeEnumStream              EntitlementDeliveryTypeEnum = "Stream"
	EntitlementDeliveryTypeEnumDownload            EntitlementDeliveryTypeEnum = "Download"
	EntitlementDeliveryTypeEnumStreamOrDownload    EntitlementDeliveryTypeEnum = "StreamOrDownload"
	EntitlementDeliveryTypeEnumProgressiveDownload EntitlementDeliveryTypeEnum = "ProgressiveDownload"
	EntitlementDeliveryTypeEnumNone                EntitlementDeliveryTypeEnum = "None"
)

type EntitlementItemTypeEnum string

const (
	EntitlementItemTypeEnumMovie       EntitlementItemTypeEnum = "movie"
	EntitlementItemTypeEnumShow        EntitlementItemTypeEnum = "show"
	EntitlementItemTypeEnumSeason      EntitlementItemTypeEnum = "season"
	EntitlementItemTypeEnumEpisode     EntitlementItemTypeEnum = "episode"
	EntitlementItemTypeEnumProgram     EntitlementItemTypeEnum = "program"
	EntitlementItemTypeEnumLink        EntitlementItemTypeEnum = "link"
	EntitlementItemTypeEnumTrailer     EntitlementItemTypeEnum = "trailer"
	EntitlementItemTypeEnumChannel     EntitlementItemTypeEnum = "channel"
	EntitlementItemTypeEnumCustomAsset EntitlementItemTypeEnum = "customAsset"
)

type EntitlementOwnershipEnum string

const (
	EntitlementOwnershipEnumSubscription EntitlementOwnershipEnum = "Subscription"
	EntitlementOwnershipEnumFree         EntitlementOwnershipEnum = "Free"
	EntitlementOwnershipEnumRent         EntitlementOwnershipEnum = "Rent"
	EntitlementOwnershipEnumOwn          EntitlementOwnershipEnum = "Own"
	EntitlementOwnershipEnumNone         EntitlementOwnershipEnum = "None"
)

type EntitlementResolutionEnum string

const (
	EntitlementResolutionEnumSd       EntitlementResolutionEnum = "SD"
	EntitlementResolutionEnumHd720    EntitlementResolutionEnum = "HD-720"
	EntitlementResolutionEnumHd1080   EntitlementResolutionEnum = "HD-1080"
	EntitlementResolutionEnumHd4K     EntitlementResolutionEnum = "HD-4K"
	EntitlementResolutionEnumExternal EntitlementResolutionEnum = "External"
	EntitlementResolutionEnumUnknown  EntitlementResolutionEnum = "Unknown"
)

type Entitlement struct {
	ActivationDate     *time.Time                  `json:"activationDate"`
	Classification     *ClassificationSummary      `json:"classification"`
	CreationDate       *time.Time                  `json:"creationDate"`
	DeliveryType       EntitlementDeliveryTypeEnum `json:"deliveryType"`
	ExclusionRules     []ExclusionRule             `json:"exclusionRules"`
	ExpirationDate     *time.Time                  `json:"expirationDate"`
	ItemID             *string                     `json:"itemId"`
	ItemType           *EntitlementItemTypeEnum    `json:"itemType"`
	MaxDownloads       *int32                      `json:"maxDownloads"`
	MaxPlays           *int32                      `json:"maxPlays"`
	MediaDuration      *int32                      `json:"mediaDuration"`
	Ownership          EntitlementOwnershipEnum    `json:"ownership"`
	PlanID             *string                     `json:"planId"`
	PlayCount          *int32                      `json:"playCount"`
	PlayPeriod         *int32                      `json:"playPeriod"`
	RemainingDownloads *int32                      `json:"remainingDownloads"`
	RentalPeriod       *int32                      `json:"rentalPeriod"`
	Resolution         EntitlementResolutionEnum   `json:"resolution"`
	Scopes             []string                    `json:"scopes"`
}
