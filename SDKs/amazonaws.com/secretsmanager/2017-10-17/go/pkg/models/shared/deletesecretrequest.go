package shared

type DeleteSecretRequest struct {
	ForceDeleteWithoutRecovery *bool  `json:"ForceDeleteWithoutRecovery"`
	RecoveryWindowInDays       *int64 `json:"RecoveryWindowInDays"`
	SecretID                   string `json:"SecretId"`
}
