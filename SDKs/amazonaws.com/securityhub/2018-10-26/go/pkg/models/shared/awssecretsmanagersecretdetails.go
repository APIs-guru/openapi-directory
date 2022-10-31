package shared

type AwsSecretsManagerSecretDetails struct {
	Deleted                         *bool                                 `json:"Deleted,omitempty"`
	Description                     *string                               `json:"Description,omitempty"`
	KmsKeyID                        *string                               `json:"KmsKeyId,omitempty"`
	Name                            *string                               `json:"Name,omitempty"`
	RotationEnabled                 *bool                                 `json:"RotationEnabled,omitempty"`
	RotationLambdaArn               *string                               `json:"RotationLambdaArn,omitempty"`
	RotationOccurredWithinFrequency *bool                                 `json:"RotationOccurredWithinFrequency,omitempty"`
	RotationRules                   *AwsSecretsManagerSecretRotationRules `json:"RotationRules,omitempty"`
}
