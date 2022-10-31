package shared



type GoalAddSubgoalRequest struct {
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Subgoal string `json:"subgoal"`
    
}

