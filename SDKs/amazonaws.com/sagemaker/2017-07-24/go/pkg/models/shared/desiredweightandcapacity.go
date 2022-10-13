package shared

type DesiredWeightAndCapacity struct {
	DesiredInstanceCount *int64   `json:"DesiredInstanceCount"`
	DesiredWeight        *float32 `json:"DesiredWeight"`
	VariantName          string   `json:"VariantName"`
}
