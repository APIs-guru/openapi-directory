package shared



type Payments struct {
    Items []Payment `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

