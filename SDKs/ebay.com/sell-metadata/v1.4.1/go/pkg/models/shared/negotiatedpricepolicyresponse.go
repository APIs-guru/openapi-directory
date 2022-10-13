package shared

type NegotiatedPricePolicyResponse struct {
	NegotiatedPricePolicies []NegotiatedPricePolicy `json:"negotiatedPricePolicies"`
	Warnings                []Error                 `json:"warnings"`
}
