package shared

type GenerateDataKeyPairResponse struct {
	KeyID                    *string              `json:"KeyId,omitempty"`
	KeyPairSpec              *DataKeyPairSpecEnum `json:"KeyPairSpec,omitempty"`
	PrivateKeyCiphertextBlob *string              `json:"PrivateKeyCiphertextBlob,omitempty"`
	PrivateKeyPlaintext      *string              `json:"PrivateKeyPlaintext,omitempty"`
	PublicKey                *string              `json:"PublicKey,omitempty"`
}
