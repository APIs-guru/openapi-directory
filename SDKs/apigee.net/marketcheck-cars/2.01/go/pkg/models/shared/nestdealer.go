package shared

type NestDealer struct {
	City        *string `json:"city"`
	Country     *string `json:"country"`
	DealerType  *string `json:"dealer_type"`
	ID          *int64  `json:"id"`
	Latitude    *string `json:"latitude"`
	Longitude   *string `json:"longitude"`
	Name        *string `json:"name"`
	Phone       *string `json:"phone"`
	SellerEmail *string `json:"seller_email"`
	State       *string `json:"state"`
	Street      *string `json:"street"`
	Website     *string `json:"website"`
	Zip         *string `json:"zip"`
}
