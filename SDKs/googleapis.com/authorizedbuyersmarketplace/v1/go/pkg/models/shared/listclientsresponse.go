package shared

// ListClientsResponse
// Response message for the list method.
type ListClientsResponse struct {
	Clients       []Client `json:"clients,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
