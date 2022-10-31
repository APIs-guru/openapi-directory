package shared

type BasePlanStateEnum string

const (
	BasePlanStateEnumStateUnspecified BasePlanStateEnum = "STATE_UNSPECIFIED"
	BasePlanStateEnumDraft            BasePlanStateEnum = "DRAFT"
	BasePlanStateEnumActive           BasePlanStateEnum = "ACTIVE"
	BasePlanStateEnumInactive         BasePlanStateEnum = "INACTIVE"
)

type BasePlan struct {
	AutoRenewingBasePlanType *AutoRenewingBasePlanType   `json:"autoRenewingBasePlanType,omitempty"`
	BasePlanID               *string                     `json:"basePlanId,omitempty"`
	OfferTags                []OfferTag                  `json:"offerTags,omitempty"`
	OtherRegionsConfig       *OtherRegionsBasePlanConfig `json:"otherRegionsConfig,omitempty"`
	PrepaidBasePlanType      *PrepaidBasePlanType        `json:"prepaidBasePlanType,omitempty"`
	RegionalConfigs          []RegionalBasePlanConfig    `json:"regionalConfigs,omitempty"`
	State                    *BasePlanStateEnum          `json:"state,omitempty"`
}
