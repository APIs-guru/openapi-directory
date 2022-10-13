package shared

type RecognizeTextResponse struct {
	Interpretations   []Interpretation  `json:"interpretations"`
	Messages          []Message         `json:"messages"`
	RequestAttributes map[string]string `json:"requestAttributes"`
	SessionID         *string           `json:"sessionId"`
	SessionState      *SessionState     `json:"sessionState"`
}
