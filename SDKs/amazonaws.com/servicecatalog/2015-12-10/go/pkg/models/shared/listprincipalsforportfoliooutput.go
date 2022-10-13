package shared

type ListPrincipalsForPortfolioOutput struct {
	NextPageToken *string     `json:"NextPageToken"`
	Principals    []Principal `json:"Principals"`
}
