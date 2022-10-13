package shared

type GenerateDataKeyPairResponse struct {
	KeyID                    *string              `json:"KeyId"`
	KeyPairSpec              *DataKeyPairSpecEnum `json:"KeyPairSpec"`
	PrivateKeyCiphertextBlob *string              `json:"PrivateKeyCiphertextBlob"`
	PrivateKeyPlaintext      *string              `json:"PrivateKeyPlaintext"`
	PublicKey                *string              `json:"PublicKey"`
}
