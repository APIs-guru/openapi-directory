package shared

// ReplaceServicePerimetersRequest
// A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
type ReplaceServicePerimetersRequest struct {
	Etag              *string            `json:"etag,omitempty"`
	ServicePerimeters []ServicePerimeter `json:"servicePerimeters,omitempty"`
}
