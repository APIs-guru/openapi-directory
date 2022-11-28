package shared

// TranscriptFilter
// Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
type TranscriptFilter struct {
	AbsoluteTimeRange    *AbsoluteTimeRange       `json:"AbsoluteTimeRange,omitempty"`
	Negate               *bool                    `json:"Negate,omitempty"`
	ParticipantRole      *ParticipantRoleEnum     `json:"ParticipantRole,omitempty"`
	RelativeTimeRange    *RelativeTimeRange       `json:"RelativeTimeRange,omitempty"`
	Targets              []string                 `json:"Targets"`
	TranscriptFilterType TranscriptFilterTypeEnum `json:"TranscriptFilterType"`
}
