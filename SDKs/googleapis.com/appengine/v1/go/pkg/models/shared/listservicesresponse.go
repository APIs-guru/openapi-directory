package shared

// ListServicesResponse
// Response message for Services.ListServices.
type ListServicesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Services      []Service `json:"services,omitempty"`
}
