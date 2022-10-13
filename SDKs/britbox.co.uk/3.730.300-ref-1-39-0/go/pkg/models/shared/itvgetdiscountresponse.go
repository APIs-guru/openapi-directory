package shared

type ItvGetDiscountResponse struct {
	Currency            *string  `json:"currency"`
	Description         *string  `json:"description"`
	Headline            *string  `json:"headline"`
	ID                  string   `json:"id"`
	InitialCost         *float64 `json:"initialCost"`
	LongDescription     *string  `json:"longDescription"`
	Nickname            *string  `json:"nickname"`
	Offerdurationperiod *string  `json:"offerdurationperiod"`
	ShortDescription    *string  `json:"shortDescription"`
}
