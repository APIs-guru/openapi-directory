package shared



type DeleteStreamInput struct {
    EnforceConsumerDeletion *bool `json:"EnforceConsumerDeletion,omitempty"`
    StreamName string `json:"StreamName"`
    
}

