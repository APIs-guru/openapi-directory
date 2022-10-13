package shared

type PutRetentionPolicyRequest struct {
	Description          *string               `json:"Description"`
	FolderConfigurations []FolderConfiguration `json:"FolderConfigurations"`
	ID                   *string               `json:"Id"`
	Name                 string                `json:"Name"`
	OrganizationID       string                `json:"OrganizationId"`
}
