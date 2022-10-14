package shared

type ListClientGatewaysResponse struct {
	ClientGateways []ClientGateway `json:"clientGateways,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	Unreachable    []string        `json:"unreachable,omitempty"`
}
