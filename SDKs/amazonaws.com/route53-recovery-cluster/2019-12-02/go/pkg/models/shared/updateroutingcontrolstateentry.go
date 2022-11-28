package shared

// UpdateRoutingControlStateEntry
// A routing control state.
type UpdateRoutingControlStateEntry struct {
	RoutingControlArn   string                  `json:"RoutingControlArn"`
	RoutingControlState RoutingControlStateEnum `json:"RoutingControlState"`
}
