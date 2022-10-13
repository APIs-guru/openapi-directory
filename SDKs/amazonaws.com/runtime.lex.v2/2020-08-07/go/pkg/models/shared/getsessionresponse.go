package shared

type GetSessionResponse struct {
	Interpretations []Interpretation `json:"interpretations"`
	Messages        []Message        `json:"messages"`
	SessionID       *string          `json:"sessionId"`
	SessionState    *SessionState    `json:"sessionState"`
}
