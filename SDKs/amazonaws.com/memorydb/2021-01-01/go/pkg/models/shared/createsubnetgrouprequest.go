package shared

type CreateSubnetGroupRequest struct {
	Description     *string  `json:"Description"`
	SubnetGroupName string   `json:"SubnetGroupName"`
	SubnetIds       []string `json:"SubnetIds"`
	Tags            []Tag    `json:"Tags"`
}
