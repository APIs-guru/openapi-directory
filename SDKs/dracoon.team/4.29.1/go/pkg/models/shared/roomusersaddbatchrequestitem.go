package shared

// RoomUsersAddBatchRequestItem
// Request item model for granting user to the room
type RoomUsersAddBatchRequestItem struct {
	ID          int64           `json:"id"`
	Permissions NodePermissions `json:"permissions"`
}
