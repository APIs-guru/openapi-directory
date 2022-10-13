package shared

type DescribeInstanceInformationResult struct {
	InstanceInformationList []InstanceInformation `json:"InstanceInformationList"`
	NextToken               *string               `json:"NextToken"`
}
