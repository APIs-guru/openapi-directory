package shared



type PutInventoryRequest struct {
    InstanceID string `json:"InstanceId"`
    Items []InventoryItem `json:"Items"`
    
}

