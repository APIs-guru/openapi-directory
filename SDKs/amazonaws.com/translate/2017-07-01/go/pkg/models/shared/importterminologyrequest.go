package shared



type ImportTerminologyRequest struct {
    Description *string `json:"Description,omitempty"`
    EncryptionKey *EncryptionKey `json:"EncryptionKey,omitempty"`
    MergeStrategy MergeStrategyEnum `json:"MergeStrategy"`
    Name string `json:"Name"`
    TerminologyData TerminologyData `json:"TerminologyData"`
    
}

