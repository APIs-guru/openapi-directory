package shared



type DescribeInstanceInformationResult struct {
    InstanceInformationList []InstanceInformation `json:"InstanceInformationList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

