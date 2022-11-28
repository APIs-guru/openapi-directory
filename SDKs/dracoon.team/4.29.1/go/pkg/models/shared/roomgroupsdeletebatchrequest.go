package shared

// RoomGroupsDeleteBatchRequest
// Request model for revoking group(s) from the room
type RoomGroupsDeleteBatchRequest struct {
	Ids []int64 `json:"ids"`
}
