package shared

// TransferDetail
// This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
type TransferDetail struct {
	BalanceAdjustment    *BalanceAdjustment `json:"balanceAdjustment,omitempty"`
	Charges              []Charge           `json:"charges,omitempty"`
	TotalChargeNetAmount *Amount            `json:"totalChargeNetAmount,omitempty"`
}
