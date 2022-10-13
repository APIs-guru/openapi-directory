package shared

type FirstPartyMobileApplicationTargeting struct {
	ExcludedAppIds []string `json:"excludedAppIds"`
	TargetedAppIds []string `json:"targetedAppIds"`
}
