package shared



type AttributesResource struct {
    ApplicationID string `json:"ApplicationId"`
    AttributeType string `json:"AttributeType"`
    Attributes []string `json:"Attributes,omitempty"`
    
}

