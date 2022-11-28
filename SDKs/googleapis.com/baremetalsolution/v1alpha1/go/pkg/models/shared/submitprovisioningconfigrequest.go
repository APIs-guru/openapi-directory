package shared

// SubmitProvisioningConfigRequest
// Request for SubmitProvisioningConfig.
type SubmitProvisioningConfigRequest struct {
	Email              *string             `json:"email,omitempty"`
	ProvisioningConfig *ProvisioningConfig `json:"provisioningConfig,omitempty"`
}
