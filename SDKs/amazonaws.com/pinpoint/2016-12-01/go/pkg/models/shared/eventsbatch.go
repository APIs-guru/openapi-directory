package shared



type EventsBatch struct {
    Endpoint PublicEndpoint `json:"Endpoint"`
    Events map[string]Event `json:"Events"`
    
}

