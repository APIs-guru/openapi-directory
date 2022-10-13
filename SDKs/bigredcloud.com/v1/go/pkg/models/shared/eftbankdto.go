package shared

type EftBankDto struct {
	Branch   *string `json:"branch"`
	ID       *int64  `json:"id"`
	Name     *string `json:"name"`
	SortCode *string `json:"sortCode"`
}
