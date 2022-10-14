package shared

type ListServicePerimetersResponse struct {
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	ServicePerimeters []ServicePerimeter `json:"servicePerimeters,omitempty"`
}
