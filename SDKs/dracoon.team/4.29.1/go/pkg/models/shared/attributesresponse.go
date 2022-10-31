package shared



type AttributesResponse struct {
    Items []KeyValueEntry `json:"items"`
    Range Range `json:"range"`
    
}

