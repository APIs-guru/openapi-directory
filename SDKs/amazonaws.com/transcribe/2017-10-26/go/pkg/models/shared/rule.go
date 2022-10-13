package shared

type Rule struct {
	InterruptionFilter *InterruptionFilter `json:"InterruptionFilter"`
	NonTalkTimeFilter  *NonTalkTimeFilter  `json:"NonTalkTimeFilter"`
	SentimentFilter    *SentimentFilter    `json:"SentimentFilter"`
	TranscriptFilter   *TranscriptFilter   `json:"TranscriptFilter"`
}
