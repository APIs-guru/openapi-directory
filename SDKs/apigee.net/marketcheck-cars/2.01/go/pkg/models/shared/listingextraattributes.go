package shared

type ListingExtraAttributes struct {
	DealerAddedF []string `json:"dealer_added_f"`
	ElectronicsF []string `json:"electronics_f"`
	ExteriorF    []string `json:"exterior_f"`
	Features     []string `json:"features"`
	ID           *string  `json:"id"`
	InteriorF    []string `json:"interior_f"`
	Options      []string `json:"options"`
	SafetyF      []string `json:"safety_f"`
	SellerCmts   *string  `json:"seller_cmts"`
	StandardF    []string `json:"standard_f"`
	TechnicalF   []string `json:"technical_f"`
}
