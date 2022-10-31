package shared



type DeregisterRobotResponse struct {
    Fleet *string `json:"fleet,omitempty"`
    Robot *string `json:"robot,omitempty"`
    
}

