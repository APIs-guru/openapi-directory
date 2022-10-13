package shared

type ImportTerminologyRequest struct {
	Description     *string           `json:"Description"`
	EncryptionKey   *EncryptionKey    `json:"EncryptionKey"`
	MergeStrategy   MergeStrategyEnum `json:"MergeStrategy"`
	Name            string            `json:"Name"`
	TerminologyData TerminologyData   `json:"TerminologyData"`
}
