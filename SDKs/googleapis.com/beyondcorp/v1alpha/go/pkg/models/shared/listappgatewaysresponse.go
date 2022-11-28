package shared

// ListAppGatewaysResponse
// Response message for BeyondCorp.ListAppGateways.
type ListAppGatewaysResponse struct {
	AppGateways   []AppGateway `json:"appGateways,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
