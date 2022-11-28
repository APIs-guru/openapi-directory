package shared

// RoomUsersDeleteBatchRequest
// Request model for revoking user(s) from the room
type RoomUsersDeleteBatchRequest struct {
	Ids []int64 `json:"ids"`
}
