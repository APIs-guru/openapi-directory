package shared

type UpdateSubnetGroupRequest struct {
	Description     *string  `json:"Description"`
	SubnetGroupName string   `json:"SubnetGroupName"`
	SubnetIds       []string `json:"SubnetIds"`
}
