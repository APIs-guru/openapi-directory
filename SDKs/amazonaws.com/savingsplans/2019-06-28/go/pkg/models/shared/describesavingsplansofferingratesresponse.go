package shared

type DescribeSavingsPlansOfferingRatesResponse struct {
	NextToken     *string                   `json:"nextToken"`
	SearchResults []SavingsPlanOfferingRate `json:"searchResults"`
}
