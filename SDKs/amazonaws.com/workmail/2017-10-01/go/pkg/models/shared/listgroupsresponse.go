package shared

type ListGroupsResponse struct {
	Groups    []Group `json:"Groups,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
