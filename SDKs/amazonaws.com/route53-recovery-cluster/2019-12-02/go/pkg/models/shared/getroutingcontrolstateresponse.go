package shared

type GetRoutingControlStateResponse struct {
	RoutingControlArn   string                  `json:"RoutingControlArn"`
	RoutingControlState RoutingControlStateEnum `json:"RoutingControlState"`
}
