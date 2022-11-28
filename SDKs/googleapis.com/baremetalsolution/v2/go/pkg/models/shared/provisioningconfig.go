package shared

type ProvisioningConfigStateEnum string

const (
	ProvisioningConfigStateEnumStateUnspecified ProvisioningConfigStateEnum = "STATE_UNSPECIFIED"
	ProvisioningConfigStateEnumDraft            ProvisioningConfigStateEnum = "DRAFT"
	ProvisioningConfigStateEnumSubmitted        ProvisioningConfigStateEnum = "SUBMITTED"
	ProvisioningConfigStateEnumProvisioning     ProvisioningConfigStateEnum = "PROVISIONING"
	ProvisioningConfigStateEnumProvisioned      ProvisioningConfigStateEnum = "PROVISIONED"
	ProvisioningConfigStateEnumValidated        ProvisioningConfigStateEnum = "VALIDATED"
	ProvisioningConfigStateEnumCancelled        ProvisioningConfigStateEnum = "CANCELLED"
	ProvisioningConfigStateEnumFailed           ProvisioningConfigStateEnum = "FAILED"
)

// ProvisioningConfigInput
// A provisioning configuration.
type ProvisioningConfigInput struct {
	CustomID               *string               `json:"customId,omitempty"`
	Email                  *string               `json:"email,omitempty"`
	HandoverServiceAccount *string               `json:"handoverServiceAccount,omitempty"`
	Instances              []InstanceConfigInput `json:"instances,omitempty"`
	Location               *string               `json:"location,omitempty"`
	Networks               []NetworkConfigInput  `json:"networks,omitempty"`
	StatusMessage          *string               `json:"statusMessage,omitempty"`
	TicketID               *string               `json:"ticketId,omitempty"`
	Volumes                []VolumeConfigInput   `json:"volumes,omitempty"`
	VpcScEnabled           *bool                 `json:"vpcScEnabled,omitempty"`
}

// ProvisioningConfig
// A provisioning configuration.
type ProvisioningConfig struct {
	CloudConsoleURI        *string                      `json:"cloudConsoleUri,omitempty"`
	CustomID               *string                      `json:"customId,omitempty"`
	Email                  *string                      `json:"email,omitempty"`
	HandoverServiceAccount *string                      `json:"handoverServiceAccount,omitempty"`
	Instances              []InstanceConfig             `json:"instances,omitempty"`
	Location               *string                      `json:"location,omitempty"`
	Name                   *string                      `json:"name,omitempty"`
	Networks               []NetworkConfig              `json:"networks,omitempty"`
	State                  *ProvisioningConfigStateEnum `json:"state,omitempty"`
	StatusMessage          *string                      `json:"statusMessage,omitempty"`
	TicketID               *string                      `json:"ticketId,omitempty"`
	UpdateTime             *string                      `json:"updateTime,omitempty"`
	Volumes                []VolumeConfig               `json:"volumes,omitempty"`
	VpcScEnabled           *bool                        `json:"vpcScEnabled,omitempty"`
}
