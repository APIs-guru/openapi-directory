package shared

// GoalSetData
// Represents a set of goals that were reached in an activity.
type GoalSetData struct {
	Goals []GoalData `json:"goals,omitempty"`
}
