package shared



type Order struct {
    Channel *string `json:"channel,omitempty"`
    OrderID *string `json:"orderId,omitempty"`
    
}

