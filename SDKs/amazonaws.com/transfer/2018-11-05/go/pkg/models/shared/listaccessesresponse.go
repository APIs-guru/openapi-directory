package shared

type ListAccessesResponse struct {
	Accesses  []ListedAccess `json:"Accesses"`
	NextToken *string        `json:"NextToken"`
	ServerID  string         `json:"ServerId"`
}
