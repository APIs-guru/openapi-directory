package shared



type UpdateServerEngineAttributesRequest struct {
    AttributeName string `json:"AttributeName"`
    AttributeValue *string `json:"AttributeValue,omitempty"`
    ServerName string `json:"ServerName"`
    
}

