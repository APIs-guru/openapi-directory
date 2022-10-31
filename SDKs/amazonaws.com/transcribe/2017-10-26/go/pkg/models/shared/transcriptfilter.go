package shared

type TranscriptFilter struct {
	AbsoluteTimeRange    *AbsoluteTimeRange       `json:"AbsoluteTimeRange,omitempty"`
	Negate               *bool                    `json:"Negate,omitempty"`
	ParticipantRole      *ParticipantRoleEnum     `json:"ParticipantRole,omitempty"`
	RelativeTimeRange    *RelativeTimeRange       `json:"RelativeTimeRange,omitempty"`
	Targets              []string                 `json:"Targets"`
	TranscriptFilterType TranscriptFilterTypeEnum `json:"TranscriptFilterType"`
}
