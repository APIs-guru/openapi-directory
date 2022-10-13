package shared

type AwsKmsKeyDetails struct {
	AwsAccountID      *string  `json:"AWSAccountId"`
	CreationDate      *float64 `json:"CreationDate"`
	Description       *string  `json:"Description"`
	KeyID             *string  `json:"KeyId"`
	KeyManager        *string  `json:"KeyManager"`
	KeyRotationStatus *bool    `json:"KeyRotationStatus"`
	KeyState          *string  `json:"KeyState"`
	Origin            *string  `json:"Origin"`
}
