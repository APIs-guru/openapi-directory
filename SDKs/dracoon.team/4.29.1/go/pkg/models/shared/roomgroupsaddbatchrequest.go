package shared

// RoomGroupsAddBatchRequest
// Request model for granting group(s) to the room
type RoomGroupsAddBatchRequest struct {
	Items []RoomGroupsAddBatchRequestItem `json:"items"`
}
