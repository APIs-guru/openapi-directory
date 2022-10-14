package shared

type PutRetentionPolicyRequest struct {
	Description          *string               `json:"Description,omitempty"`
	FolderConfigurations []FolderConfiguration `json:"FolderConfigurations"`
	ID                   *string               `json:"Id,omitempty"`
	Name                 string                `json:"Name"`
	OrganizationID       string                `json:"OrganizationId"`
}
