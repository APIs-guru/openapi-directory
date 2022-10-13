package shared

type ResumeSessionResponse struct {
	SessionID  *string `json:"SessionId"`
	StreamURL  *string `json:"StreamUrl"`
	TokenValue *string `json:"TokenValue"`
}
