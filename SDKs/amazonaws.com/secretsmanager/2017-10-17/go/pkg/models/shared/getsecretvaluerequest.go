package shared



type GetSecretValueRequest struct {
    SecretID string `json:"SecretId"`
    VersionID *string `json:"VersionId,omitempty"`
    VersionStage *string `json:"VersionStage,omitempty"`
    
}

