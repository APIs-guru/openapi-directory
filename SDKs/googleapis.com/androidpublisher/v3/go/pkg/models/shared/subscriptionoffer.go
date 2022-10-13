package shared

type SubscriptionOfferStateEnum string

const (
	SubscriptionOfferStateEnumStateUnspecified SubscriptionOfferStateEnum = "STATE_UNSPECIFIED"
	SubscriptionOfferStateEnumDraft            SubscriptionOfferStateEnum = "DRAFT"
	SubscriptionOfferStateEnumActive           SubscriptionOfferStateEnum = "ACTIVE"
	SubscriptionOfferStateEnumInactive         SubscriptionOfferStateEnum = "INACTIVE"
)

type SubscriptionOffer struct {
	BasePlanID         *string                              `json:"basePlanId"`
	OfferID            *string                              `json:"offerId"`
	OfferTags          []OfferTag                           `json:"offerTags"`
	OtherRegionsConfig *OtherRegionsSubscriptionOfferConfig `json:"otherRegionsConfig"`
	PackageName        *string                              `json:"packageName"`
	Phases             []SubscriptionOfferPhase             `json:"phases"`
	ProductID          *string                              `json:"productId"`
	RegionalConfigs    []RegionalSubscriptionOfferConfig    `json:"regionalConfigs"`
	State              *SubscriptionOfferStateEnum          `json:"state"`
	Targeting          *SubscriptionOfferTargeting          `json:"targeting"`
}
