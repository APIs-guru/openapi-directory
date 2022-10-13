package shared

type DescribeSavingsPlanRatesResponse struct {
	NextToken     *string           `json:"nextToken"`
	SavingsPlanID *string           `json:"savingsPlanId"`
	SearchResults []SavingsPlanRate `json:"searchResults"`
}
