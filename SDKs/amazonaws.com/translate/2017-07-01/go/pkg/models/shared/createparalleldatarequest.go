package shared

type CreateParallelDataRequest struct {
	ClientToken        string             `json:"ClientToken"`
	Description        *string            `json:"Description,omitempty"`
	EncryptionKey      *EncryptionKey     `json:"EncryptionKey,omitempty"`
	Name               string             `json:"Name"`
	ParallelDataConfig ParallelDataConfig `json:"ParallelDataConfig"`
}
