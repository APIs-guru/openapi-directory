package shared

type DescribeSavingsPlansOfferingRatesResponse struct {
	NextToken     *string                   `json:"nextToken,omitempty"`
	SearchResults []SavingsPlanOfferingRate `json:"searchResults,omitempty"`
}
