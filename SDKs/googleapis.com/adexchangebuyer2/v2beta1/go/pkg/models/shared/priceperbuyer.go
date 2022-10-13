package shared

type PricePerBuyer struct {
	AdvertiserIds []string `json:"advertiserIds"`
	Buyer         *Buyer   `json:"buyer"`
	Price         *Price   `json:"price"`
}
