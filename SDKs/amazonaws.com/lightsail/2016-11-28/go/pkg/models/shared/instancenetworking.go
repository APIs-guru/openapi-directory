package shared



type InstanceNetworking struct {
    MonthlyTransfer *MonthlyTransfer `json:"monthlyTransfer,omitempty"`
    Ports []InstancePortInfo `json:"ports,omitempty"`
    
}

