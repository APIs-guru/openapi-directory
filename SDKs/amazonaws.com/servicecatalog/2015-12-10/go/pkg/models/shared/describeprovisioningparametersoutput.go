package shared

type DescribeProvisioningParametersOutput struct {
	ConstraintSummaries             []ConstraintSummary              `json:"ConstraintSummaries,omitempty"`
	ProvisioningArtifactOutputs     []ProvisioningArtifactOutput     `json:"ProvisioningArtifactOutputs,omitempty"`
	ProvisioningArtifactParameters  []ProvisioningArtifactParameter  `json:"ProvisioningArtifactParameters,omitempty"`
	ProvisioningArtifactPreferences *ProvisioningArtifactPreferences `json:"ProvisioningArtifactPreferences,omitempty"`
	TagOptions                      []TagOptionSummary               `json:"TagOptions,omitempty"`
	UsageInstructions               []UsageInstruction               `json:"UsageInstructions,omitempty"`
}
