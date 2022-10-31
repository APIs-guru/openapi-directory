package shared



type CreateModelResponse struct {
    ModelArn *string `json:"ModelArn,omitempty"`
    Status *ModelStatusEnum `json:"Status,omitempty"`
    
}

