package shared



type PutRecordOutput struct {
    EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
    SequenceNumber string `json:"SequenceNumber"`
    ShardID string `json:"ShardId"`
    
}

