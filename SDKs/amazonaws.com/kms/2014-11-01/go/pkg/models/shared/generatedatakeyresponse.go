package shared

type GenerateDataKeyResponse struct {
	CiphertextBlob *string `json:"CiphertextBlob"`
	KeyID          *string `json:"KeyId"`
	Plaintext      *string `json:"Plaintext"`
}
