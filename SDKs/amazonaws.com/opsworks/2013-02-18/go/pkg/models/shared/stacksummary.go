package shared



type StackSummary struct {
    AppsCount *int64 `json:"AppsCount,omitempty"`
    Arn *string `json:"Arn,omitempty"`
    InstancesCount *InstancesCount `json:"InstancesCount,omitempty"`
    LayersCount *int64 `json:"LayersCount,omitempty"`
    Name *string `json:"Name,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    
}

