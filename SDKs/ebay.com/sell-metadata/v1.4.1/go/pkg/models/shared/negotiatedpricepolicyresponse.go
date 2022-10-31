package shared



type NegotiatedPricePolicyResponse struct {
    NegotiatedPricePolicies []NegotiatedPricePolicy `json:"negotiatedPricePolicies,omitempty"`
    Warnings []Error `json:"warnings,omitempty"`
    
}

