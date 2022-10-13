package shared

type ShareError struct {
	Accounts []string `json:"Accounts"`
	Error    *string  `json:"Error"`
	Message  *string  `json:"Message"`
}
