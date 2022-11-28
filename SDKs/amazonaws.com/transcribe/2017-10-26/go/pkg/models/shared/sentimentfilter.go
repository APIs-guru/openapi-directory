package shared

// SentimentFilter
// An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
type SentimentFilter struct {
	AbsoluteTimeRange *AbsoluteTimeRange   `json:"AbsoluteTimeRange,omitempty"`
	Negate            *bool                `json:"Negate,omitempty"`
	ParticipantRole   *ParticipantRoleEnum `json:"ParticipantRole,omitempty"`
	RelativeTimeRange *RelativeTimeRange   `json:"RelativeTimeRange,omitempty"`
	Sentiments        []SentimentValueEnum `json:"Sentiments"`
}
