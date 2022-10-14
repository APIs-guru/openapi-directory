package shared

type BoardList struct {
	BoardCount *int32           `json:"board_count,omitempty"`
	Boards     []BoardListBoard `json:"boards,omitempty"`
}
