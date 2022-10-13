package shared

type ItvBillingHistory struct {
	PaymentHistory []ItvBillingHistoryRecord `json:"payment_history"`
}
