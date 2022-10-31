package shared



type DisassociateNodeRequest struct {
    EngineAttributes []EngineAttribute `json:"EngineAttributes,omitempty"`
    NodeName string `json:"NodeName"`
    ServerName string `json:"ServerName"`
    
}

