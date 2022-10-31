package shared



type RotateSecretRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    RotationLambdaArn *string `json:"RotationLambdaARN,omitempty"`
    RotationRules *RotationRulesType `json:"RotationRules,omitempty"`
    SecretID string `json:"SecretId"`
    
}

