package shared



type UpdateJobShipmentStateRequest struct {
    JobID string `json:"JobId"`
    ShipmentState ShipmentStateEnum `json:"ShipmentState"`
    
}

