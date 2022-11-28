package shared

// BaseResponse
// This type defines the fields for any warning error messages.
type BaseResponse struct {
	Warnings []Error `json:"warnings,omitempty"`
}
