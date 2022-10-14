package shared

type GetDefaultRetentionPolicyResponse struct {
	Description          *string               `json:"Description,omitempty"`
	FolderConfigurations []FolderConfiguration `json:"FolderConfigurations,omitempty"`
	ID                   *string               `json:"Id,omitempty"`
	Name                 *string               `json:"Name,omitempty"`
}
