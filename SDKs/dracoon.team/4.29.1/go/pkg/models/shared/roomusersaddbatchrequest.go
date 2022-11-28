package shared

// RoomUsersAddBatchRequest
// Request model for granting user(s) to the room
type RoomUsersAddBatchRequest struct {
	Items []RoomUsersAddBatchRequestItem `json:"items"`
}
