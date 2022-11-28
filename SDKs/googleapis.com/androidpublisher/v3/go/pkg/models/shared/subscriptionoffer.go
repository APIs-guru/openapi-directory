package shared

type SubscriptionOfferStateEnum string

const (
	SubscriptionOfferStateEnumStateUnspecified SubscriptionOfferStateEnum = "STATE_UNSPECIFIED"
	SubscriptionOfferStateEnumDraft            SubscriptionOfferStateEnum = "DRAFT"
	SubscriptionOfferStateEnumActive           SubscriptionOfferStateEnum = "ACTIVE"
	SubscriptionOfferStateEnumInactive         SubscriptionOfferStateEnum = "INACTIVE"
)

// SubscriptionOffer
// A single, temporary offer
type SubscriptionOffer struct {
	BasePlanID         *string                              `json:"basePlanId,omitempty"`
	OfferID            *string                              `json:"offerId,omitempty"`
	OfferTags          []OfferTag                           `json:"offerTags,omitempty"`
	OtherRegionsConfig *OtherRegionsSubscriptionOfferConfig `json:"otherRegionsConfig,omitempty"`
	PackageName        *string                              `json:"packageName,omitempty"`
	Phases             []SubscriptionOfferPhase             `json:"phases,omitempty"`
	ProductID          *string                              `json:"productId,omitempty"`
	RegionalConfigs    []RegionalSubscriptionOfferConfig    `json:"regionalConfigs,omitempty"`
	State              *SubscriptionOfferStateEnum          `json:"state,omitempty"`
	Targeting          *SubscriptionOfferTargeting          `json:"targeting,omitempty"`
}

// SubscriptionOfferInput
// A single, temporary offer
type SubscriptionOfferInput struct {
	BasePlanID         *string                              `json:"basePlanId,omitempty"`
	OfferID            *string                              `json:"offerId,omitempty"`
	OfferTags          []OfferTag                           `json:"offerTags,omitempty"`
	OtherRegionsConfig *OtherRegionsSubscriptionOfferConfig `json:"otherRegionsConfig,omitempty"`
	PackageName        *string                              `json:"packageName,omitempty"`
	Phases             []SubscriptionOfferPhase             `json:"phases,omitempty"`
	ProductID          *string                              `json:"productId,omitempty"`
	RegionalConfigs    []RegionalSubscriptionOfferConfig    `json:"regionalConfigs,omitempty"`
	Targeting          *SubscriptionOfferTargeting          `json:"targeting,omitempty"`
}
