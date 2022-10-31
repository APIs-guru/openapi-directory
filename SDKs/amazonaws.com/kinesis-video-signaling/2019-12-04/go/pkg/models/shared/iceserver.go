package shared



type IceServer struct {
    Password *string `json:"Password,omitempty"`
    TTL *int64 `json:"Ttl,omitempty"`
    Uris []string `json:"Uris,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

