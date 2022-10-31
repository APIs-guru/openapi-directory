package shared



type ListRetirableGrantsRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    RetiringPrincipal string `json:"RetiringPrincipal"`
    
}

