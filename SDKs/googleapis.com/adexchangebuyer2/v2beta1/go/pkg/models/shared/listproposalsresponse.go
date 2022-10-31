package shared



type ListProposalsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Proposals []Proposal `json:"proposals,omitempty"`
    
}

