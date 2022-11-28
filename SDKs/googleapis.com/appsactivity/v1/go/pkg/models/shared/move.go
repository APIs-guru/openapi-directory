package shared

// Move
// Contains information about changes in an object's parents as a result of a move type event.
type Move struct {
	AddedParents   []Parent `json:"addedParents,omitempty"`
	RemovedParents []Parent `json:"removedParents,omitempty"`
}
