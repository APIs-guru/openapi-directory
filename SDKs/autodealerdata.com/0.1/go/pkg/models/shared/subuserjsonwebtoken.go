package shared



type SubUserJSONWebToken struct {
    CreatedOn *int64 `json:"createdOn,omitempty"`
    Domain string `json:"domain"`
    EndPoints []string `json:"endPoints,omitempty"`
    Expires *int64 `json:"expires,omitempty"`
    Token string `json:"token"`
    UUID string `json:"uuid"`
    
}

