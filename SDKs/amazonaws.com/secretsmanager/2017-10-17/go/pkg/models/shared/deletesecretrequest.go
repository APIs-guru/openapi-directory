package shared



type DeleteSecretRequest struct {
    ForceDeleteWithoutRecovery *bool `json:"ForceDeleteWithoutRecovery,omitempty"`
    RecoveryWindowInDays *int64 `json:"RecoveryWindowInDays,omitempty"`
    SecretID string `json:"SecretId"`
    
}

