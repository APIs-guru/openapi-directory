package shared



type UsageAllocation struct {
    AllocatedUsageQuantity int64 `json:"AllocatedUsageQuantity"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

