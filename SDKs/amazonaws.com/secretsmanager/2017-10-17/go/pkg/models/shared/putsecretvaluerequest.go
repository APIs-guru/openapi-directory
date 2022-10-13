package shared

type PutSecretValueRequest struct {
	ClientRequestToken *string  `json:"ClientRequestToken"`
	SecretBinary       *string  `json:"SecretBinary"`
	SecretID           string   `json:"SecretId"`
	SecretString       *string  `json:"SecretString"`
	VersionStages      []string `json:"VersionStages"`
}
