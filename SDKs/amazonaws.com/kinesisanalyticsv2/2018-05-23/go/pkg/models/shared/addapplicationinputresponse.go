package shared



type AddApplicationInputResponse struct {
    ApplicationArn *string `json:"ApplicationARN,omitempty"`
    ApplicationVersionID *int64 `json:"ApplicationVersionId,omitempty"`
    InputDescriptions []InputDescription `json:"InputDescriptions,omitempty"`
    
}

