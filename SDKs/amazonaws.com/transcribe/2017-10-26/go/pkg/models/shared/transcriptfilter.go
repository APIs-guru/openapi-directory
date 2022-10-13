package shared

type TranscriptFilter struct {
	AbsoluteTimeRange    *AbsoluteTimeRange       `json:"AbsoluteTimeRange"`
	Negate               *bool                    `json:"Negate"`
	ParticipantRole      *ParticipantRoleEnum     `json:"ParticipantRole"`
	RelativeTimeRange    *RelativeTimeRange       `json:"RelativeTimeRange"`
	Targets              []string                 `json:"Targets"`
	TranscriptFilterType TranscriptFilterTypeEnum `json:"TranscriptFilterType"`
}
