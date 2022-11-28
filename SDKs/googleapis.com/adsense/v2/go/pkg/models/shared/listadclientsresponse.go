package shared

// ListAdClientsResponse
// Response definition for the ad client list rpc.
type ListAdClientsResponse struct {
	AdClients     []AdClient `json:"adClients,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
