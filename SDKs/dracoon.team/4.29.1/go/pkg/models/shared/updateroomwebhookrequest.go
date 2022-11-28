package shared

// UpdateRoomWebhookRequest
// Request model for handling webhook assignments
type UpdateRoomWebhookRequest struct {
	Items []RoomWebhookAssignment `json:"items"`
}
