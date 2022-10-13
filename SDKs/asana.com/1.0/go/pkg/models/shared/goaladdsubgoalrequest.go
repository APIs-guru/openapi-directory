package shared

type GoalAddSubgoalRequest struct {
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Subgoal      string  `json:"subgoal"`
}
