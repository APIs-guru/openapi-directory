package shared

type ListBonusPaymentsResponse struct {
	BonusPayments []BonusPayment `json:"BonusPayments"`
	NextToken     *string        `json:"NextToken"`
	NumResults    *int64         `json:"NumResults"`
}
