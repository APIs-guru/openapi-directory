package shared

type TransactionSummaryResponse struct {
	AdjustmentAmount            *Amount `json:"adjustmentAmount"`
	AdjustmentBookingEntry      *string `json:"adjustmentBookingEntry"`
	AdjustmentCount             *int32  `json:"adjustmentCount"`
	BalanceTransferAmount       *Amount `json:"balanceTransferAmount"`
	BalanceTransferBookingEntry *string `json:"balanceTransferBookingEntry"`
	BalanceTransferCount        *int32  `json:"balanceTransferCount"`
	CreditAmount                *Amount `json:"creditAmount"`
	CreditBookingEntry          *string `json:"creditBookingEntry"`
	CreditCount                 *int32  `json:"creditCount"`
	DisputeAmount               *Amount `json:"disputeAmount"`
	DisputeBookingEntry         *string `json:"disputeBookingEntry"`
	DisputeCount                *int32  `json:"disputeCount"`
	NonSaleChargeAmount         *Amount `json:"nonSaleChargeAmount"`
	NonSaleChargeBookingEntry   *string `json:"nonSaleChargeBookingEntry"`
	NonSaleChargeCount          *int32  `json:"nonSaleChargeCount"`
	OnHoldAmount                *Amount `json:"onHoldAmount"`
	OnHoldBookingEntry          *string `json:"onHoldBookingEntry"`
	OnHoldCount                 *int32  `json:"onHoldCount"`
	RefundAmount                *Amount `json:"refundAmount"`
	RefundBookingEntry          *string `json:"refundBookingEntry"`
	RefundCount                 *int32  `json:"refundCount"`
	ShippingLabelAmount         *Amount `json:"shippingLabelAmount"`
	ShippingLabelBookingEntry   *string `json:"shippingLabelBookingEntry"`
	ShippingLabelCount          *int32  `json:"shippingLabelCount"`
	TransferAmount              *Amount `json:"transferAmount"`
	TransferBookingEntry        *string `json:"transferBookingEntry"`
	TransferCount               *int32  `json:"transferCount"`
}
