package shared

type ListAppGatewaysResponse struct {
	AppGateways   []AppGateway `json:"appGateways"`
	NextPageToken *string      `json:"nextPageToken"`
	Unreachable   []string     `json:"unreachable"`
}
