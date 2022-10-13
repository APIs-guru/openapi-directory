package shared

type GetLedgerAccountResponse struct {
	Data       map[string]interface{} `json:"data"`
	Operation  string                 `json:"operation"`
	Resource   string                 `json:"resource"`
	Service    string                 `json:"service"`
	Status     string                 `json:"status"`
	StatusCode int64                  `json:"status_code"`
}
