package shared



type Stream struct {
    StreamArn *string `json:"StreamArn,omitempty"`
    StreamLabel *string `json:"StreamLabel,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    
}

