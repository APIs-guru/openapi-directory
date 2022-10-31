package shared



type StopStreamEncryptionInput struct {
    EncryptionType EncryptionTypeEnum `json:"EncryptionType"`
    KeyID string `json:"KeyId"`
    StreamName string `json:"StreamName"`
    
}

