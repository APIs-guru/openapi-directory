package shared

// ListClientGatewaysResponse
// Message for response to listing ClientGateways.
type ListClientGatewaysResponse struct {
	ClientGateways []ClientGateway `json:"clientGateways,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	Unreachable    []string        `json:"unreachable,omitempty"`
}
