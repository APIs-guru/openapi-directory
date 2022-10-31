package shared

type FirstPartyMobileApplicationTargeting struct {
	ExcludedAppIds []string `json:"excludedAppIds,omitempty"`
	TargetedAppIds []string `json:"targetedAppIds,omitempty"`
}
