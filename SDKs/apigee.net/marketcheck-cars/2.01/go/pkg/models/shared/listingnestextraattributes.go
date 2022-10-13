package shared

type ListingNestExtraAttributes struct {
	DealerAddedF   []string `json:"dealer_added_f"`
	ElectronicsF   []string `json:"electronics_f"`
	ExteriorF      []string `json:"exterior_f"`
	Features       []string `json:"features"`
	InteriorF      []string `json:"interior_f"`
	Options        []string `json:"options"`
	SafetyF        []string `json:"safety_f"`
	SellerComments *string  `json:"seller_comments"`
	StandardF      []string `json:"standard_f"`
	TechnicalF     []string `json:"technical_f"`
}
