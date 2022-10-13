package shared

type GetDefaultRetentionPolicyResponse struct {
	Description          *string               `json:"Description"`
	FolderConfigurations []FolderConfiguration `json:"FolderConfigurations"`
	ID                   *string               `json:"Id"`
	Name                 *string               `json:"Name"`
}
