package shared

type ListRoutingControlsResponse struct {
	NextToken       *string          `json:"NextToken"`
	RoutingControls []RoutingControl `json:"RoutingControls"`
}
