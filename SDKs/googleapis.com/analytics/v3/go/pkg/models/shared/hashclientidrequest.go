package shared



type HashClientIDRequest struct {
    ClientID *string `json:"clientId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    WebPropertyID *string `json:"webPropertyId,omitempty"`
    
}

