package shared

type GenerateDataKeyWithoutPlaintextResponse struct {
	CiphertextBlob *string `json:"CiphertextBlob"`
	KeyID          *string `json:"KeyId"`
}
