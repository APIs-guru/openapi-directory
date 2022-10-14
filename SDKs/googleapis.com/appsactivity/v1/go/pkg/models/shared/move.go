package shared

type Move struct {
	AddedParents   []Parent `json:"addedParents,omitempty"`
	RemovedParents []Parent `json:"removedParents,omitempty"`
}
