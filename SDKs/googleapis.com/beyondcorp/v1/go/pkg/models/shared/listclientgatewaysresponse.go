package shared

type ListClientGatewaysResponse struct {
	ClientGateways []ClientGateway `json:"clientGateways"`
	NextPageToken  *string         `json:"nextPageToken"`
	Unreachable    []string        `json:"unreachable"`
}
