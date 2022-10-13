package shared

type ListGrantsResponse struct {
	Grants     []GrantListEntry `json:"Grants"`
	NextMarker *string          `json:"NextMarker"`
	Truncated  *bool            `json:"Truncated"`
}
