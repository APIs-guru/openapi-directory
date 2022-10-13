package shared

type AccountDto struct {
	AccountGroup *string `json:"accountGroup"`
	AccountType  *string `json:"accountType"`
	Code         *string `json:"code"`
	Description  *string `json:"description"`
	ID           *int64  `json:"id"`
}
