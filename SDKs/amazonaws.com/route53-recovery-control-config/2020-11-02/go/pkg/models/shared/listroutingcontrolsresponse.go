package shared

type ListRoutingControlsResponse struct {
	NextToken       *string          `json:"NextToken,omitempty"`
	RoutingControls []RoutingControl `json:"RoutingControls,omitempty"`
}
