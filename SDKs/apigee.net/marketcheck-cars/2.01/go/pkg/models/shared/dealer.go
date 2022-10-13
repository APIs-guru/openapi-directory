package shared

type Dealer struct {
	City         *string  `json:"city"`
	Country      *string  `json:"country"`
	DataSource   *string  `json:"data_source"`
	Distance     *float64 `json:"distance"`
	ID           *string  `json:"id"`
	InventoryURL *string  `json:"inventory_url"`
	Latitude     *string  `json:"latitude"`
	LocationLl   *string  `json:"location_ll"`
	Longitude    *string  `json:"longitude"`
	SellerEmail  *string  `json:"seller_email"`
	SellerName   *string  `json:"seller_name"`
	SellerPhone  *string  `json:"seller_phone"`
	State        *string  `json:"state"`
	Status       *string  `json:"status"`
	Street       *string  `json:"street"`
	Zip          *string  `json:"zip"`
}
