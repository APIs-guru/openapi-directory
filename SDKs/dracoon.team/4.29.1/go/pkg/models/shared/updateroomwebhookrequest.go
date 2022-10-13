package shared

type UpdateRoomWebhookRequest struct {
	Items []RoomWebhookAssignment `json:"items"`
}
