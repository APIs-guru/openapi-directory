package shared

// AwsKmsKeyDetails
// Contains metadata about an KMS key.
type AwsKmsKeyDetails struct {
	AwsAccountID      *string  `json:"AWSAccountId,omitempty"`
	CreationDate      *float64 `json:"CreationDate,omitempty"`
	Description       *string  `json:"Description,omitempty"`
	KeyID             *string  `json:"KeyId,omitempty"`
	KeyManager        *string  `json:"KeyManager,omitempty"`
	KeyRotationStatus *bool    `json:"KeyRotationStatus,omitempty"`
	KeyState          *string  `json:"KeyState,omitempty"`
	Origin            *string  `json:"Origin,omitempty"`
}
