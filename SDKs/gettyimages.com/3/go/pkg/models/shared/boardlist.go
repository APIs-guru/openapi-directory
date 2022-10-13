package shared

type BoardList struct {
	BoardCount *int32           `json:"board_count"`
	Boards     []BoardListBoard `json:"boards"`
}
