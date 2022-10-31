package shared

type ListProtectionsResponse struct {
	NextToken   *string      `json:"NextToken,omitempty"`
	Protections []Protection `json:"Protections,omitempty"`
}
