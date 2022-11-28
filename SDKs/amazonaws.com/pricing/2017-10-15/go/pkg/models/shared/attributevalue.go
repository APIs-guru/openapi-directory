package shared

// AttributeValue
// The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute.
type AttributeValue struct {
	Value *string `json:"Value,omitempty"`
}
