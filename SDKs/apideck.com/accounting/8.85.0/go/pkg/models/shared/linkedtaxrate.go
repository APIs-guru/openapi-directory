package shared

type LinkedTaxRateInput struct {
	ID *string `json:"id,omitempty"`
}

type LinkedTaxRate struct {
	Code *string `json:"code,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}
