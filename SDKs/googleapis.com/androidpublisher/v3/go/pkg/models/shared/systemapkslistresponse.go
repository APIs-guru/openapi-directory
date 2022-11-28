package shared

// SystemApksListResponse
// Response to list previously created system APK variants.
type SystemApksListResponse struct {
	Variants []Variant `json:"variants,omitempty"`
}
