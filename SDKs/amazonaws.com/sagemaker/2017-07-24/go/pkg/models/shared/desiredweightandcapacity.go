package shared

// DesiredWeightAndCapacity
// Specifies weight and capacity values for a production variant.
type DesiredWeightAndCapacity struct {
	DesiredInstanceCount *int64   `json:"DesiredInstanceCount,omitempty"`
	DesiredWeight        *float32 `json:"DesiredWeight,omitempty"`
	VariantName          string   `json:"VariantName"`
}
