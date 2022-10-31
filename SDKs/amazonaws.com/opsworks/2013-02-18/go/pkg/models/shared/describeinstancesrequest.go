package shared



type DescribeInstancesRequest struct {
    InstanceIds []string `json:"InstanceIds,omitempty"`
    LayerID *string `json:"LayerId,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    
}

