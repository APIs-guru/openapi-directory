package shared

// ListConnectionsResponse
// The response for ConnectionService.ListConnections.
type ListConnectionsResponse struct {
	Connections   []Connection `json:"connections,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
