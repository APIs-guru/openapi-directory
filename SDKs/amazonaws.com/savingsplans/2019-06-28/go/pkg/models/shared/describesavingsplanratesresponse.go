package shared



type DescribeSavingsPlanRatesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SavingsPlanID *string `json:"savingsPlanId,omitempty"`
    SearchResults []SavingsPlanRate `json:"searchResults,omitempty"`
    
}

