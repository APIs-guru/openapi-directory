package shared



type Rule struct {
    InterruptionFilter *InterruptionFilter `json:"InterruptionFilter,omitempty"`
    NonTalkTimeFilter *NonTalkTimeFilter `json:"NonTalkTimeFilter,omitempty"`
    SentimentFilter *SentimentFilter `json:"SentimentFilter,omitempty"`
    TranscriptFilter *TranscriptFilter `json:"TranscriptFilter,omitempty"`
    
}

