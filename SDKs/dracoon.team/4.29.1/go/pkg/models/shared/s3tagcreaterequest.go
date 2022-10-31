package shared



type S3TagCreateRequest struct {
    IsMandatory *bool `json:"isMandatory,omitempty"`
    Key string `json:"key"`
    Value string `json:"value"`
    
}

