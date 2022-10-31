package shared



type GetMembersResponse struct {
    Members []Member `json:"Members,omitempty"`
    UnprocessedAccounts []Result `json:"UnprocessedAccounts,omitempty"`
    
}

