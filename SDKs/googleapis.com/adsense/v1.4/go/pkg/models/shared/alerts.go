package shared



type Alerts struct {
    Items []Alert `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

