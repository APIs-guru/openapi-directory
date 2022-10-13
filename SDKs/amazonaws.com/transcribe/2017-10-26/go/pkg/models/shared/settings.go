package shared

type Settings struct {
	ChannelIdentification  *bool                       `json:"ChannelIdentification"`
	MaxAlternatives        *int64                      `json:"MaxAlternatives"`
	MaxSpeakerLabels       *int64                      `json:"MaxSpeakerLabels"`
	ShowAlternatives       *bool                       `json:"ShowAlternatives"`
	ShowSpeakerLabels      *bool                       `json:"ShowSpeakerLabels"`
	VocabularyFilterMethod *VocabularyFilterMethodEnum `json:"VocabularyFilterMethod"`
	VocabularyFilterName   *string                     `json:"VocabularyFilterName"`
	VocabularyName         *string                     `json:"VocabularyName"`
}
