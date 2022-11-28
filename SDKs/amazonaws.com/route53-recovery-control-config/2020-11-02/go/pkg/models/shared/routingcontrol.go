package shared

// RoutingControl
// A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.
type RoutingControl struct {
	ControlPanelArn   *string     `json:"ControlPanelArn,omitempty"`
	Name              *string     `json:"Name,omitempty"`
	RoutingControlArn *string     `json:"RoutingControlArn,omitempty"`
	Status            *StatusEnum `json:"Status,omitempty"`
}
