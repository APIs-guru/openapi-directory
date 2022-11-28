package shared

// ResourceEndpointListItem
// An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
type ResourceEndpointListItem struct {
	Protocol         *ChannelProtocolEnum `json:"Protocol,omitempty"`
	ResourceEndpoint *string              `json:"ResourceEndpoint,omitempty"`
}
