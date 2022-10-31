package shared



type TransactionSummaryResponse struct {
    AdjustmentAmount *Amount `json:"adjustmentAmount,omitempty"`
    AdjustmentBookingEntry *string `json:"adjustmentBookingEntry,omitempty"`
    AdjustmentCount *int32 `json:"adjustmentCount,omitempty"`
    BalanceTransferAmount *Amount `json:"balanceTransferAmount,omitempty"`
    BalanceTransferBookingEntry *string `json:"balanceTransferBookingEntry,omitempty"`
    BalanceTransferCount *int32 `json:"balanceTransferCount,omitempty"`
    CreditAmount *Amount `json:"creditAmount,omitempty"`
    CreditBookingEntry *string `json:"creditBookingEntry,omitempty"`
    CreditCount *int32 `json:"creditCount,omitempty"`
    DisputeAmount *Amount `json:"disputeAmount,omitempty"`
    DisputeBookingEntry *string `json:"disputeBookingEntry,omitempty"`
    DisputeCount *int32 `json:"disputeCount,omitempty"`
    NonSaleChargeAmount *Amount `json:"nonSaleChargeAmount,omitempty"`
    NonSaleChargeBookingEntry *string `json:"nonSaleChargeBookingEntry,omitempty"`
    NonSaleChargeCount *int32 `json:"nonSaleChargeCount,omitempty"`
    OnHoldAmount *Amount `json:"onHoldAmount,omitempty"`
    OnHoldBookingEntry *string `json:"onHoldBookingEntry,omitempty"`
    OnHoldCount *int32 `json:"onHoldCount,omitempty"`
    RefundAmount *Amount `json:"refundAmount,omitempty"`
    RefundBookingEntry *string `json:"refundBookingEntry,omitempty"`
    RefundCount *int32 `json:"refundCount,omitempty"`
    ShippingLabelAmount *Amount `json:"shippingLabelAmount,omitempty"`
    ShippingLabelBookingEntry *string `json:"shippingLabelBookingEntry,omitempty"`
    ShippingLabelCount *int32 `json:"shippingLabelCount,omitempty"`
    TransferAmount *Amount `json:"transferAmount,omitempty"`
    TransferBookingEntry *string `json:"transferBookingEntry,omitempty"`
    TransferCount *int32 `json:"transferCount,omitempty"`
    
}

