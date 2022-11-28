package shared

// SubmitProvisioningConfigRequestInput
// Request for SubmitProvisioningConfig.
type SubmitProvisioningConfigRequestInput struct {
	Email              *string                  `json:"email,omitempty"`
	ProvisioningConfig *ProvisioningConfigInput `json:"provisioningConfig,omitempty"`
}
