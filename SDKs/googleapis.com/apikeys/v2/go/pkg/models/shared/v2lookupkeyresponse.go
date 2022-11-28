package shared

// V2LookupKeyResponse
// Response message for `LookupKey` method.
type V2LookupKeyResponse struct {
	Name   *string `json:"name,omitempty"`
	Parent *string `json:"parent,omitempty"`
}
