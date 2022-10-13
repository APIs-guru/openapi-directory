package shared

type MySQLDatabase struct {
	AccountID  *int32  `json:"account_id"`
	ActualSize *int32  `json:"actual_size"`
	Hostname   *string `json:"hostname"`
	MaxSize    *int32  `json:"max_size"`
	Name       *string `json:"name"`
	UserCount  *int32  `json:"user_count"`
}
