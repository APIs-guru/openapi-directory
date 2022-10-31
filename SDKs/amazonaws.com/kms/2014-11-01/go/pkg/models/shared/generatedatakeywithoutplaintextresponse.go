package shared

type GenerateDataKeyWithoutPlaintextResponse struct {
	CiphertextBlob *string `json:"CiphertextBlob,omitempty"`
	KeyID          *string `json:"KeyId,omitempty"`
}
