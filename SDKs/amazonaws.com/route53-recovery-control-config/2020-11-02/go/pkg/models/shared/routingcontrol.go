package shared

type RoutingControl struct {
	ControlPanelArn   *string     `json:"ControlPanelArn"`
	Name              *string     `json:"Name"`
	RoutingControlArn *string     `json:"RoutingControlArn"`
	Status            *StatusEnum `json:"Status"`
}
