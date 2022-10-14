package shared

type CreateMySQLDatabase struct {
	AccountID    *int32  `json:"account_id,omitempty"`
	DatabaseName *string `json:"database_name,omitempty"`
	Password     *string `json:"password,omitempty"`
}
