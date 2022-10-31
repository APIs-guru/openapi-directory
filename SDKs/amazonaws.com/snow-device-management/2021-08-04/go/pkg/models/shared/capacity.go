package shared



type Capacity struct {
    Available *int64 `json:"available,omitempty"`
    Name *string `json:"name,omitempty"`
    Total *int64 `json:"total,omitempty"`
    Unit *string `json:"unit,omitempty"`
    Used *int64 `json:"used,omitempty"`
    
}

