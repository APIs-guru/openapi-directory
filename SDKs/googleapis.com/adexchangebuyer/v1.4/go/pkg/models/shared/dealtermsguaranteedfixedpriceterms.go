package shared



type DealTermsGuaranteedFixedPriceTerms struct {
    BillingInfo *DealTermsGuaranteedFixedPriceTermsBillingInfo `json:"billingInfo,omitempty"`
    FixedPrices []PricePerBuyer `json:"fixedPrices,omitempty"`
    GuaranteedImpressions *string `json:"guaranteedImpressions,omitempty"`
    GuaranteedLooks *string `json:"guaranteedLooks,omitempty"`
    MinimumDailyLooks *string `json:"minimumDailyLooks,omitempty"`
    
}

