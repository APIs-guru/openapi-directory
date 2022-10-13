package shared

type ResourceEndpointListItem struct {
	Protocol         *ChannelProtocolEnum `json:"Protocol"`
	ResourceEndpoint *string              `json:"ResourceEndpoint"`
}
