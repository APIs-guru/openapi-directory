package shared

// PutRecordOutput
// Represents the output for <code>PutRecord</code>.
type PutRecordOutput struct {
	EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
	SequenceNumber string              `json:"SequenceNumber"`
	ShardID        string              `json:"ShardId"`
}
