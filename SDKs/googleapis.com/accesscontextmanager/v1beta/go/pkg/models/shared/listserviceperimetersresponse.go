package shared

// ListServicePerimetersResponse
// A response to `ListServicePerimetersRequest`.
type ListServicePerimetersResponse struct {
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	ServicePerimeters []ServicePerimeter `json:"servicePerimeters,omitempty"`
}
