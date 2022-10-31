package shared

type ListingExtraAttributes struct {
	DealerAddedF []string `json:"dealer_added_f,omitempty"`
	ElectronicsF []string `json:"electronics_f,omitempty"`
	ExteriorF    []string `json:"exterior_f,omitempty"`
	Features     []string `json:"features,omitempty"`
	ID           *string  `json:"id,omitempty"`
	InteriorF    []string `json:"interior_f,omitempty"`
	Options      []string `json:"options,omitempty"`
	SafetyF      []string `json:"safety_f,omitempty"`
	SellerCmts   *string  `json:"seller_cmts,omitempty"`
	StandardF    []string `json:"standard_f,omitempty"`
	TechnicalF   []string `json:"technical_f,omitempty"`
}
