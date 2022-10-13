package shared

type ListProposalsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Proposals     []Proposal `json:"proposals"`
}
