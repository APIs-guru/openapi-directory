package shared

type ItvBillingHistoryRecord struct {
	Card         map[string]interface{} `json:"card"`
	Charge       map[string]interface{} `json:"charge"`
	Invoice      map[string]interface{} `json:"invoice"`
	Subscription map[string]interface{} `json:"subscription"`
}
