package shared

type GenerateDataKeyPairWithoutPlaintextResponse struct {
	KeyID                    *string              `json:"KeyId,omitempty"`
	KeyPairSpec              *DataKeyPairSpecEnum `json:"KeyPairSpec,omitempty"`
	PrivateKeyCiphertextBlob *string              `json:"PrivateKeyCiphertextBlob,omitempty"`
	PublicKey                *string              `json:"PublicKey,omitempty"`
}
