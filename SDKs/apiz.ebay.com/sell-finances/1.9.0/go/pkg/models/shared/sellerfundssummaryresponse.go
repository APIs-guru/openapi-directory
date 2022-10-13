package shared

type SellerFundsSummaryResponse struct {
	AvailableFunds  *Amount `json:"availableFunds"`
	FundsOnHold     *Amount `json:"fundsOnHold"`
	ProcessingFunds *Amount `json:"processingFunds"`
	TotalFunds      *Amount `json:"totalFunds"`
}
