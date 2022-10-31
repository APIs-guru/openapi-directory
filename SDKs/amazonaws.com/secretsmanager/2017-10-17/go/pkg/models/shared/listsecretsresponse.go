package shared



type ListSecretsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SecretList []SecretListEntry `json:"SecretList,omitempty"`
    
}

