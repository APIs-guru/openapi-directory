package shared



type UpdateSecretRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    Description *string `json:"Description,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    SecretBinary *string `json:"SecretBinary,omitempty"`
    SecretID string `json:"SecretId"`
    SecretString *string `json:"SecretString,omitempty"`
    
}

