package shared



type SentimentFilter struct {
    AbsoluteTimeRange *AbsoluteTimeRange `json:"AbsoluteTimeRange,omitempty"`
    Negate *bool `json:"Negate,omitempty"`
    ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole,omitempty"`
    RelativeTimeRange *RelativeTimeRange `json:"RelativeTimeRange,omitempty"`
    Sentiments []SentimentValueEnum `json:"Sentiments"`
    
}

