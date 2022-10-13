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

type ProvisioningConfig struct {
	CloudConsoleURI        *string                      `json:"cloudConsoleUri"`
	CustomID               *string                      `json:"customId"`
	Email                  *string                      `json:"email"`
	HandoverServiceAccount *string                      `json:"handoverServiceAccount"`
	Instances              []InstanceConfig             `json:"instances"`
	Location               *string                      `json:"location"`
	Name                   *string                      `json:"name"`
	Networks               []NetworkConfig              `json:"networks"`
	State                  *ProvisioningConfigStateEnum `json:"state"`
	StatusMessage          *string                      `json:"statusMessage"`
	TicketID               *string                      `json:"ticketId"`
	UpdateTime             *string                      `json:"updateTime"`
	Volumes                []VolumeConfig               `json:"volumes"`
	VpcScEnabled           *bool                        `json:"vpcScEnabled"`
}
