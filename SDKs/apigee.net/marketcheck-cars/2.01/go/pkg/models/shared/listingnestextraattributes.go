package shared

type ListingNestExtraAttributes struct {
	DealerAddedF   []string `json:"dealer_added_f,omitempty"`
	ElectronicsF   []string `json:"electronics_f,omitempty"`
	ExteriorF      []string `json:"exterior_f,omitempty"`
	Features       []string `json:"features,omitempty"`
	InteriorF      []string `json:"interior_f,omitempty"`
	Options        []string `json:"options,omitempty"`
	SafetyF        []string `json:"safety_f,omitempty"`
	SellerComments *string  `json:"seller_comments,omitempty"`
	StandardF      []string `json:"standard_f,omitempty"`
	TechnicalF     []string `json:"technical_f,omitempty"`
}
