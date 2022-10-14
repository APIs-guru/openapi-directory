package shared

type UpdateSubnetGroupRequest struct {
	Description     *string  `json:"Description,omitempty"`
	SubnetGroupName string   `json:"SubnetGroupName"`
	SubnetIds       []string `json:"SubnetIds,omitempty"`
}
