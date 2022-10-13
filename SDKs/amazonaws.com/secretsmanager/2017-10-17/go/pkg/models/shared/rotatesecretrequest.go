package shared

type RotateSecretRequest struct {
	ClientRequestToken *string            `json:"ClientRequestToken"`
	RotationLambdaArn  *string            `json:"RotationLambdaARN"`
	RotationRules      *RotationRulesType `json:"RotationRules"`
	SecretID           string             `json:"SecretId"`
}
