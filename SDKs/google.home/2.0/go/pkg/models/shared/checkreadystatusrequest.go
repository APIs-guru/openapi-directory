package shared

type CheckReadyStatusRequest struct {
	PlayReadyMessage bool   `json:"play_ready_message"`
	UserID           string `json:"user_id"`
}
