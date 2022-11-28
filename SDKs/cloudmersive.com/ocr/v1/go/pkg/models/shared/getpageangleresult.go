package shared

// GetPageAngleResult
// Result of performing a get-page-angle operation
type GetPageAngleResult struct {
	Angle      *float64 `json:"Angle,omitempty"`
	Successful *bool    `json:"Successful,omitempty"`
}
