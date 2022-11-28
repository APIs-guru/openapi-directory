package shared

// AwsSecretsManagerSecretRotationRules
// Defines the rotation schedule for the secret.
type AwsSecretsManagerSecretRotationRules struct {
	AutomaticallyAfterDays *int64 `json:"AutomaticallyAfterDays,omitempty"`
}
