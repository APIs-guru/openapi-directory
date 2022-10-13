package shared

type ProvisioningArtifactPreferences struct {
	StackSetAccounts []string `json:"StackSetAccounts"`
	StackSetRegions  []string `json:"StackSetRegions"`
}
