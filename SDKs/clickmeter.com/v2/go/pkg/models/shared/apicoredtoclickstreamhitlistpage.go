package shared



type APICoreDtoClickStreamHitListPage struct {
    Hits []APICoreDtoClickStreamHit `json:"hits,omitempty"`
    LastKey *string `json:"lastKey,omitempty"`
    
}

