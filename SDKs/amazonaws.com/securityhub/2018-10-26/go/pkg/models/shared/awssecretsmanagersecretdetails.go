package shared

type AwsSecretsManagerSecretDetails struct {
	Deleted                         *bool                                 `json:"Deleted"`
	Description                     *string                               `json:"Description"`
	KmsKeyID                        *string                               `json:"KmsKeyId"`
	Name                            *string                               `json:"Name"`
	RotationEnabled                 *bool                                 `json:"RotationEnabled"`
	RotationLambdaArn               *string                               `json:"RotationLambdaArn"`
	RotationOccurredWithinFrequency *bool                                 `json:"RotationOccurredWithinFrequency"`
	RotationRules                   *AwsSecretsManagerSecretRotationRules `json:"RotationRules"`
}
