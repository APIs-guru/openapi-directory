package shared

// ResolveConnectionsResponse
// Response message for BeyondCorp.ResolveConnections.
type ResolveConnectionsResponse struct {
	ConnectionDetails []ConnectionDetails `json:"connectionDetails,omitempty"`
	NextPageToken     *string             `json:"nextPageToken,omitempty"`
	Unreachable       []string            `json:"unreachable,omitempty"`
}
