package shared

type Transfer struct {
	FundingSource   *FundingSource  `json:"fundingSource"`
	TransactionDate *string         `json:"transactionDate"`
	TransferAmount  *Amount         `json:"transferAmount"`
	TransferDetail  *TransferDetail `json:"transferDetail"`
	TransferID      *string         `json:"transferId"`
}
