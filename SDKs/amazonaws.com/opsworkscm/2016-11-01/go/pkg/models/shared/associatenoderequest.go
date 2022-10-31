package shared



type AssociateNodeRequest struct {
    EngineAttributes []EngineAttribute `json:"EngineAttributes"`
    NodeName string `json:"NodeName"`
    ServerName string `json:"ServerName"`
    
}

