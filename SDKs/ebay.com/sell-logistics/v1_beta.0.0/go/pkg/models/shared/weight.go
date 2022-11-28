package shared

// Weight
// This complex type contains information about the weight of an object such as a shipping package.
type Weight struct {
	Unit  *string `json:"unit,omitempty"`
	Value *string `json:"value,omitempty"`
}
