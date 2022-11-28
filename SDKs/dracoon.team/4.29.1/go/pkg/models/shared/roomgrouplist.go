package shared

// RoomGroupList
// List of groups
type RoomGroupList struct {
	Items []RoomGroup `json:"items"`
	Range Range       `json:"range"`
}
