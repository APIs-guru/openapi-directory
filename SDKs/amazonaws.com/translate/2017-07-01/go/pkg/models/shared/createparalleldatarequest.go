package shared

type CreateParallelDataRequest struct {
	ClientToken        string             `json:"ClientToken"`
	Description        *string            `json:"Description"`
	EncryptionKey      *EncryptionKey     `json:"EncryptionKey"`
	Name               string             `json:"Name"`
	ParallelDataConfig ParallelDataConfig `json:"ParallelDataConfig"`
}
