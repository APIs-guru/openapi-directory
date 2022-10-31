package shared



type InterruptionFilter struct {
    AbsoluteTimeRange *AbsoluteTimeRange `json:"AbsoluteTimeRange,omitempty"`
    Negate *bool `json:"Negate,omitempty"`
    ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole,omitempty"`
    RelativeTimeRange *RelativeTimeRange `json:"RelativeTimeRange,omitempty"`
    Threshold *int64 `json:"Threshold,omitempty"`
    
}

