package shared

type BasePlanStateEnum string

const (
	BasePlanStateEnumStateUnspecified BasePlanStateEnum = "STATE_UNSPECIFIED"
	BasePlanStateEnumDraft            BasePlanStateEnum = "DRAFT"
	BasePlanStateEnumActive           BasePlanStateEnum = "ACTIVE"
	BasePlanStateEnumInactive         BasePlanStateEnum = "INACTIVE"
)

type BasePlan struct {
	AutoRenewingBasePlanType *AutoRenewingBasePlanType   `json:"autoRenewingBasePlanType"`
	BasePlanID               *string                     `json:"basePlanId"`
	OfferTags                []OfferTag                  `json:"offerTags"`
	OtherRegionsConfig       *OtherRegionsBasePlanConfig `json:"otherRegionsConfig"`
	PrepaidBasePlanType      *PrepaidBasePlanType        `json:"prepaidBasePlanType"`
	RegionalConfigs          []RegionalBasePlanConfig    `json:"regionalConfigs"`
	State                    *BasePlanStateEnum          `json:"state"`
}
