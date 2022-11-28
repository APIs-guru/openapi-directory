package shared

// ChangeSummary
// This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
type ChangeSummary struct {
	ChangeName      *string       `json:"ChangeName,omitempty"`
	ChangeType      *string       `json:"ChangeType,omitempty"`
	Details         *string       `json:"Details,omitempty"`
	Entity          *Entity       `json:"Entity,omitempty"`
	ErrorDetailList []ErrorDetail `json:"ErrorDetailList,omitempty"`
}
