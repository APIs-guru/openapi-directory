package shared

type CreateMySQLDatabase struct {
	AccountID    *int32  `json:"account_id"`
	DatabaseName *string `json:"database_name"`
	Password     *string `json:"password"`
}
