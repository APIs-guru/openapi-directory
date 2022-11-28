package shared

// DestinationRoute
// The setting used to configure ClientGateways. It is adding routes to the client's routing table after the connection is established.
type DestinationRoute struct {
	Address *string `json:"address,omitempty"`
	Netmask *string `json:"netmask,omitempty"`
}
