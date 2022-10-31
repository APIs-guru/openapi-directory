package shared



type MedicalTranscriptionSetting struct {
    ChannelIdentification *bool `json:"ChannelIdentification,omitempty"`
    MaxAlternatives *int64 `json:"MaxAlternatives,omitempty"`
    MaxSpeakerLabels *int64 `json:"MaxSpeakerLabels,omitempty"`
    ShowAlternatives *bool `json:"ShowAlternatives,omitempty"`
    ShowSpeakerLabels *bool `json:"ShowSpeakerLabels,omitempty"`
    VocabularyName *string `json:"VocabularyName,omitempty"`
    
}

