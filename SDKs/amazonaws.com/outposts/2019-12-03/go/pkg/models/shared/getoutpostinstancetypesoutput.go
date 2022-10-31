package shared



type GetOutpostInstanceTypesOutput struct {
    InstanceTypes []InstanceTypeItem `json:"InstanceTypes,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OutpostArn *string `json:"OutpostArn,omitempty"`
    OutpostID *string `json:"OutpostId,omitempty"`
    
}

