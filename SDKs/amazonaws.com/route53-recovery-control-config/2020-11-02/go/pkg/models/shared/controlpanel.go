package shared

// ControlPanel
// A control panel represents a group of routing controls that can be changed together in a single transaction.
type ControlPanel struct {
	ClusterArn          *string     `json:"ClusterArn,omitempty"`
	ControlPanelArn     *string     `json:"ControlPanelArn,omitempty"`
	DefaultControlPanel *bool       `json:"DefaultControlPanel,omitempty"`
	Name                *string     `json:"Name,omitempty"`
	RoutingControlCount *int64      `json:"RoutingControlCount,omitempty"`
	Status              *StatusEnum `json:"Status,omitempty"`
}
