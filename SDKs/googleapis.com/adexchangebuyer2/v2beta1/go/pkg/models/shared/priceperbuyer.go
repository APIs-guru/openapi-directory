package shared

type PricePerBuyer struct {
	AdvertiserIds []string `json:"advertiserIds,omitempty"`
	Buyer         *Buyer   `json:"buyer,omitempty"`
	Price         *Price   `json:"price,omitempty"`
}
