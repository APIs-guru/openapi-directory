package shared

type StartSessionResponse struct {
	SessionID  *string `json:"SessionId"`
	StreamURL  *string `json:"StreamUrl"`
	TokenValue *string `json:"TokenValue"`
}
