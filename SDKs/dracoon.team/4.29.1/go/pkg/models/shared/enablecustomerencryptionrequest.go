package shared



type EnableCustomerEncryptionRequest struct {
    DataSpaceRescueKey UserKeyPairContainer `json:"dataSpaceRescueKey"`
    EnableCustomerEncryption bool `json:"enableCustomerEncryption"`
    
}

