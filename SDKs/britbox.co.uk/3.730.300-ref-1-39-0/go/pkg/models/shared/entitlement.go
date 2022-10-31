package shared

import (
"time")


type EntitlementDeliveryTypeEnum string

const (
    EntitlementDeliveryTypeEnumStream EntitlementDeliveryTypeEnum = "Stream"
EntitlementDeliveryTypeEnumDownload EntitlementDeliveryTypeEnum = "Download"
EntitlementDeliveryTypeEnumStreamOrDownload EntitlementDeliveryTypeEnum = "StreamOrDownload"
EntitlementDeliveryTypeEnumProgressiveDownload EntitlementDeliveryTypeEnum = "ProgressiveDownload"
EntitlementDeliveryTypeEnumNone EntitlementDeliveryTypeEnum = "None"
)



type EntitlementItemTypeEnum string

const (
    EntitlementItemTypeEnumMovie EntitlementItemTypeEnum = "movie"
EntitlementItemTypeEnumShow EntitlementItemTypeEnum = "show"
EntitlementItemTypeEnumSeason EntitlementItemTypeEnum = "season"
EntitlementItemTypeEnumEpisode EntitlementItemTypeEnum = "episode"
EntitlementItemTypeEnumProgram EntitlementItemTypeEnum = "program"
EntitlementItemTypeEnumLink EntitlementItemTypeEnum = "link"
EntitlementItemTypeEnumTrailer EntitlementItemTypeEnum = "trailer"
EntitlementItemTypeEnumChannel EntitlementItemTypeEnum = "channel"
EntitlementItemTypeEnumCustomAsset EntitlementItemTypeEnum = "customAsset"
)



type EntitlementOwnershipEnum string

const (
    EntitlementOwnershipEnumSubscription EntitlementOwnershipEnum = "Subscription"
EntitlementOwnershipEnumFree EntitlementOwnershipEnum = "Free"
EntitlementOwnershipEnumRent EntitlementOwnershipEnum = "Rent"
EntitlementOwnershipEnumOwn EntitlementOwnershipEnum = "Own"
EntitlementOwnershipEnumNone EntitlementOwnershipEnum = "None"
)



type EntitlementResolutionEnum string

const (
    EntitlementResolutionEnumSd EntitlementResolutionEnum = "SD"
EntitlementResolutionEnumHd720 EntitlementResolutionEnum = "HD-720"
EntitlementResolutionEnumHd1080 EntitlementResolutionEnum = "HD-1080"
EntitlementResolutionEnumHd4K EntitlementResolutionEnum = "HD-4K"
EntitlementResolutionEnumExternal EntitlementResolutionEnum = "External"
EntitlementResolutionEnumUnknown EntitlementResolutionEnum = "Unknown"
)


type Entitlement struct {
    ActivationDate *time.Time `json:"activationDate,omitempty"`
    Classification *ClassificationSummary `json:"classification,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    DeliveryType EntitlementDeliveryTypeEnum `json:"deliveryType"`
    ExclusionRules []ExclusionRule `json:"exclusionRules,omitempty"`
    ExpirationDate *time.Time `json:"expirationDate,omitempty"`
    ItemID *string `json:"itemId,omitempty"`
    ItemType *EntitlementItemTypeEnum `json:"itemType,omitempty"`
    MaxDownloads *int32 `json:"maxDownloads,omitempty"`
    MaxPlays *int32 `json:"maxPlays,omitempty"`
    MediaDuration *int32 `json:"mediaDuration,omitempty"`
    Ownership EntitlementOwnershipEnum `json:"ownership"`
    PlanID *string `json:"planId,omitempty"`
    PlayCount *int32 `json:"playCount,omitempty"`
    PlayPeriod *int32 `json:"playPeriod,omitempty"`
    RemainingDownloads *int32 `json:"remainingDownloads,omitempty"`
    RentalPeriod *int32 `json:"rentalPeriod,omitempty"`
    Resolution EntitlementResolutionEnum `json:"resolution"`
    Scopes []string `json:"scopes"`
    
}

