package shared



type RoutingControl struct {
    ControlPanelArn *string `json:"ControlPanelArn,omitempty"`
    Name *string `json:"Name,omitempty"`
    RoutingControlArn *string `json:"RoutingControlArn,omitempty"`
    Status *StatusEnum `json:"Status,omitempty"`
    
}

