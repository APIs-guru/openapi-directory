package shared

type ListProtectionsResponse struct {
	NextToken   *string      `json:"NextToken"`
	Protections []Protection `json:"Protections"`
}
