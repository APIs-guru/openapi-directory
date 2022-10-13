package shared

type SentimentFilter struct {
	AbsoluteTimeRange *AbsoluteTimeRange   `json:"AbsoluteTimeRange"`
	Negate            *bool                `json:"Negate"`
	ParticipantRole   *ParticipantRoleEnum `json:"ParticipantRole"`
	RelativeTimeRange *RelativeTimeRange   `json:"RelativeTimeRange"`
	Sentiments        []SentimentValueEnum `json:"Sentiments"`
}
