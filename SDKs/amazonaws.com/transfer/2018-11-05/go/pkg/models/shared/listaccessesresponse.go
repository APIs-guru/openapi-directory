package shared

type ListAccessesResponse struct {
	Accesses  []ListedAccess `json:"Accesses"`
	NextToken *string        `json:"NextToken,omitempty"`
	ServerID  string         `json:"ServerId"`
}
