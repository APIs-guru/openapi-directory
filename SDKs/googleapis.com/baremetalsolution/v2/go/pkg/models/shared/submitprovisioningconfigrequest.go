package shared

type SubmitProvisioningConfigRequest struct {
	Email              *string             `json:"email"`
	ProvisioningConfig *ProvisioningConfig `json:"provisioningConfig"`
}
