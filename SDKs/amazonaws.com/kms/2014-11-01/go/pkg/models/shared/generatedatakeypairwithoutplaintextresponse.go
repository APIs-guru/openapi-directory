package shared

type GenerateDataKeyPairWithoutPlaintextResponse struct {
	KeyID                    *string              `json:"KeyId"`
	KeyPairSpec              *DataKeyPairSpecEnum `json:"KeyPairSpec"`
	PrivateKeyCiphertextBlob *string              `json:"PrivateKeyCiphertextBlob"`
	PublicKey                *string              `json:"PublicKey"`
}
