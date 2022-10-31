package shared

type ProvisioningArtifactPreferences struct {
	StackSetAccounts []string `json:"StackSetAccounts,omitempty"`
	StackSetRegions  []string `json:"StackSetRegions,omitempty"`
}
