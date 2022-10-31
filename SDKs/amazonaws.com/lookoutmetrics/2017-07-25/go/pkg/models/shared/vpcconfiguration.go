package shared

type VpcConfiguration struct {
	SecurityGroupIDList []string `json:"SecurityGroupIdList"`
	SubnetIDList        []string `json:"SubnetIdList"`
}
