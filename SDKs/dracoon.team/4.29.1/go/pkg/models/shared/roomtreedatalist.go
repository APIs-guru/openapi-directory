package shared

// RoomTreeDataList
// List of rooms
type RoomTreeDataList struct {
	Items []RoomData `json:"items"`
	Range Range      `json:"range"`
}
