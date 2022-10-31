package shared



type PutSecretValueRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    SecretBinary *string `json:"SecretBinary,omitempty"`
    SecretID string `json:"SecretId"`
    SecretString *string `json:"SecretString,omitempty"`
    VersionStages []string `json:"VersionStages,omitempty"`
    
}

