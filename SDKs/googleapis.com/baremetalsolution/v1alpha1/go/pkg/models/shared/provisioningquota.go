package shared

// ProvisioningQuota
// A provisioning quota for a given project.
type ProvisioningQuota struct {
	InstanceQuota *InstanceQuota `json:"instanceQuota,omitempty"`
}
