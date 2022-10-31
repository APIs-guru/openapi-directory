package shared

type ListPortfolioAccessOutput struct {
	AccountIds    []string `json:"AccountIds,omitempty"`
	NextPageToken *string  `json:"NextPageToken,omitempty"`
}
