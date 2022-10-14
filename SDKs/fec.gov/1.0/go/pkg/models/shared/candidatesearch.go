package shared

type CandidateSearch struct {
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	OfficeSought *string `json:"office_sought,omitempty"`
}
