package shared

type UpdateSecretRequest struct {
	ClientRequestToken *string `json:"ClientRequestToken"`
	Description        *string `json:"Description"`
	KmsKeyID           *string `json:"KmsKeyId"`
	SecretBinary       *string `json:"SecretBinary"`
	SecretID           string  `json:"SecretId"`
	SecretString       *string `json:"SecretString"`
}
