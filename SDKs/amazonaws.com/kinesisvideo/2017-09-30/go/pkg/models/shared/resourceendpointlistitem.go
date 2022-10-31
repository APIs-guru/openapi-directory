package shared

type ResourceEndpointListItem struct {
	Protocol         *ChannelProtocolEnum `json:"Protocol,omitempty"`
	ResourceEndpoint *string              `json:"ResourceEndpoint,omitempty"`
}
