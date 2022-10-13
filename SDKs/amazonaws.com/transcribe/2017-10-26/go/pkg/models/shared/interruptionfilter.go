package shared

type InterruptionFilter struct {
	AbsoluteTimeRange *AbsoluteTimeRange   `json:"AbsoluteTimeRange"`
	Negate            *bool                `json:"Negate"`
	ParticipantRole   *ParticipantRoleEnum `json:"ParticipantRole"`
	RelativeTimeRange *RelativeTimeRange   `json:"RelativeTimeRange"`
	Threshold         *int64               `json:"Threshold"`
}
