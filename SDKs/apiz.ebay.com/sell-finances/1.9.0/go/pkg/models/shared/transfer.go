package shared

type Transfer struct {
	FundingSource   *FundingSource  `json:"fundingSource,omitempty"`
	TransactionDate *string         `json:"transactionDate,omitempty"`
	TransferAmount  *Amount         `json:"transferAmount,omitempty"`
	TransferDetail  *TransferDetail `json:"transferDetail,omitempty"`
	TransferID      *string         `json:"transferId,omitempty"`
}
