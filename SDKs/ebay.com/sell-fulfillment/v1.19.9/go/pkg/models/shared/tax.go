package shared

type Tax struct {
	Amount  *Amount `json:"amount"`
	TaxType *string `json:"taxType"`
}
