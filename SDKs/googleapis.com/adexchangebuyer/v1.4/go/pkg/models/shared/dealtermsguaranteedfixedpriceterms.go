package shared

type DealTermsGuaranteedFixedPriceTerms struct {
	BillingInfo           *DealTermsGuaranteedFixedPriceTermsBillingInfo `json:"billingInfo"`
	FixedPrices           []PricePerBuyer                                `json:"fixedPrices"`
	GuaranteedImpressions *string                                        `json:"guaranteedImpressions"`
	GuaranteedLooks       *string                                        `json:"guaranteedLooks"`
	MinimumDailyLooks     *string                                        `json:"minimumDailyLooks"`
}
