package shared



type AwsDynamoDbTableStreamSpecification struct {
    StreamEnabled *bool `json:"StreamEnabled,omitempty"`
    StreamViewType *string `json:"StreamViewType,omitempty"`
    
}

