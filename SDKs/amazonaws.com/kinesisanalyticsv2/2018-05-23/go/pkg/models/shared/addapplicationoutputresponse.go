package shared



type AddApplicationOutputResponse struct {
    ApplicationArn *string `json:"ApplicationARN,omitempty"`
    ApplicationVersionID *int64 `json:"ApplicationVersionId,omitempty"`
    OutputDescriptions []OutputDescription `json:"OutputDescriptions,omitempty"`
    
}

