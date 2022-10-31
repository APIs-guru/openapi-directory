package shared

type ListPrincipalsForPortfolioOutput struct {
	NextPageToken *string     `json:"NextPageToken,omitempty"`
	Principals    []Principal `json:"Principals,omitempty"`
}
