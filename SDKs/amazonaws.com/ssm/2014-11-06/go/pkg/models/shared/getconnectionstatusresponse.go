package shared



type GetConnectionStatusResponse struct {
    Status *ConnectionStatusEnum `json:"Status,omitempty"`
    Target *string `json:"Target,omitempty"`
    
}

