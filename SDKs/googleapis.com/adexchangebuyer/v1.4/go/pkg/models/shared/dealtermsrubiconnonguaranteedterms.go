package shared

type DealTermsRubiconNonGuaranteedTerms struct {
	PriorityPrice *Price `json:"priorityPrice"`
	StandardPrice *Price `json:"standardPrice"`
}
