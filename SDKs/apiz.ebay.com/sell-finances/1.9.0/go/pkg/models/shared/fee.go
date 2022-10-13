package shared

type Fee struct {
	Amount  *Amount `json:"amount"`
	FeeMemo *string `json:"feeMemo"`
	FeeType *string `json:"feeType"`
}
