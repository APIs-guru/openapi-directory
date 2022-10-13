package shared

type ListPortfolioAccessOutput struct {
	AccountIds    []string `json:"AccountIds"`
	NextPageToken *string  `json:"NextPageToken"`
}
