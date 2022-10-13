package shared

type ControlPanel struct {
	ClusterArn          *string     `json:"ClusterArn"`
	ControlPanelArn     *string     `json:"ControlPanelArn"`
	DefaultControlPanel *bool       `json:"DefaultControlPanel"`
	Name                *string     `json:"Name"`
	RoutingControlCount *int64      `json:"RoutingControlCount"`
	Status              *StatusEnum `json:"Status"`
}
