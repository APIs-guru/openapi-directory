package shared



type ConfigWeb struct {
    IsPersistentConnections *int32 `json:"is_persistent_connections,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int32 `json:"port,omitempty"`
    Rule *string `json:"rule,omitempty"`
    Username *string `json:"username,omitempty"`
    Wsdl *string `json:"wsdl,omitempty"`
    
}

