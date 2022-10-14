package shared

type DescribeSavingsPlansOfferingsResponse struct {
	NextToken     *string               `json:"nextToken,omitempty"`
	SearchResults []SavingsPlanOffering `json:"searchResults,omitempty"`
}
