package shared

// RoomUserListOutput
// List of users
type RoomUserListOutput struct {
	Items []RoomUserOutput `json:"items"`
	Range Range            `json:"range"`
}
