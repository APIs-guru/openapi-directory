package shared

type Move struct {
	AddedParents   []Parent `json:"addedParents"`
	RemovedParents []Parent `json:"removedParents"`
}
