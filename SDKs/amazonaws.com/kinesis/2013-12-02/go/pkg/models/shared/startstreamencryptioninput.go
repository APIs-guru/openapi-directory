package shared



type StartStreamEncryptionInput struct {
    EncryptionType EncryptionTypeEnum `json:"EncryptionType"`
    KeyID string `json:"KeyId"`
    StreamName string `json:"StreamName"`
    
}

