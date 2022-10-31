package shared



type UpdateRoutingControlStateRequest struct {
    RoutingControlArn string `json:"RoutingControlArn"`
    RoutingControlState RoutingControlStateEnum `json:"RoutingControlState"`
    
}

