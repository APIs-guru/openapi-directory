package shared

type MedicalTranscriptionSetting struct {
	ChannelIdentification *bool   `json:"ChannelIdentification"`
	MaxAlternatives       *int64  `json:"MaxAlternatives"`
	MaxSpeakerLabels      *int64  `json:"MaxSpeakerLabels"`
	ShowAlternatives      *bool   `json:"ShowAlternatives"`
	ShowSpeakerLabels     *bool   `json:"ShowSpeakerLabels"`
	VocabularyName        *string `json:"VocabularyName"`
}
