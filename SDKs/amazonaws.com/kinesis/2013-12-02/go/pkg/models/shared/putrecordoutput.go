package shared

type PutRecordOutput struct {
	EncryptionType *EncryptionTypeEnum `json:"EncryptionType"`
	SequenceNumber string              `json:"SequenceNumber"`
	ShardID        string              `json:"ShardId"`
}
