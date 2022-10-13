package shared

type UpdateRoutingControlStateEntry struct {
	RoutingControlArn   string                  `json:"RoutingControlArn"`
	RoutingControlState RoutingControlStateEnum `json:"RoutingControlState"`
}
