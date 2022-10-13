package shared

type PresidentialByCandidatePage struct {
	Pagination *OffsetInfo               `json:"pagination"`
	Results    []PresidentialByCandidate `json:"results"`
}
