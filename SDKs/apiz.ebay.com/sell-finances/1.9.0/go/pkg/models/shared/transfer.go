package shared

// Transfer
// This type is the base response type used by TRANSFER transaction type that is returned in the response.
type Transfer struct {
	FundingSource   *FundingSource  `json:"fundingSource,omitempty"`
	TransactionDate *string         `json:"transactionDate,omitempty"`
	TransferAmount  *Amount         `json:"transferAmount,omitempty"`
	TransferDetail  *TransferDetail `json:"transferDetail,omitempty"`
	TransferID      *string         `json:"transferId,omitempty"`
}
