package shared

// SellerFundsSummaryResponse
// This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
type SellerFundsSummaryResponse struct {
	AvailableFunds  *Amount `json:"availableFunds,omitempty"`
	FundsOnHold     *Amount `json:"fundsOnHold,omitempty"`
	ProcessingFunds *Amount `json:"processingFunds,omitempty"`
	TotalFunds      *Amount `json:"totalFunds,omitempty"`
}
