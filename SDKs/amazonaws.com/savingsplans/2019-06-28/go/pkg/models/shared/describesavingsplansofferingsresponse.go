package shared

type DescribeSavingsPlansOfferingsResponse struct {
	NextToken     *string               `json:"nextToken"`
	SearchResults []SavingsPlanOffering `json:"searchResults"`
}
