package shared

type TransferDetail struct {
	BalanceAdjustment    *BalanceAdjustment `json:"balanceAdjustment"`
	Charges              []Charge           `json:"charges"`
	TotalChargeNetAmount *Amount            `json:"totalChargeNetAmount"`
}
