package shared

// UsageAllocation
// <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
type UsageAllocation struct {
	AllocatedUsageQuantity int64 `json:"AllocatedUsageQuantity"`
	Tags                   []Tag `json:"Tags,omitempty"`
}
