package shared

// EnableCustomerEncryptionRequest
// Request model for enabling customer encryption
type EnableCustomerEncryptionRequest struct {
	DataSpaceRescueKey       UserKeyPairContainer `json:"dataSpaceRescueKey"`
	EnableCustomerEncryption bool                 `json:"enableCustomerEncryption"`
}
