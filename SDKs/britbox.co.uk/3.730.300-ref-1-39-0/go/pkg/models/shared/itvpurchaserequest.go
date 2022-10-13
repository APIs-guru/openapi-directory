package shared

type ItvPurchaseRequest struct {
	CardToken    string  `json:"cardToken"`
	PlanID       string  `json:"planId"`
	ProfileToken string  `json:"profileToken"`
	Voucher      *string `json:"voucher"`
}
