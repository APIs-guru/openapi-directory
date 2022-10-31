package shared



type AuthMethod struct {
    IsEnabled bool `json:"isEnabled"`
    Name string `json:"name"`
    Priority int32 `json:"priority"`
    
}

