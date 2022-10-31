package shared

type ItvGetDiscountResponse struct {
	Currency            *string  `json:"currency,omitempty"`
	Description         *string  `json:"description,omitempty"`
	Headline            *string  `json:"headline,omitempty"`
	ID                  string   `json:"id"`
	InitialCost         *float64 `json:"initialCost,omitempty"`
	LongDescription     *string  `json:"longDescription,omitempty"`
	Nickname            *string  `json:"nickname,omitempty"`
	Offerdurationperiod *string  `json:"offerdurationperiod,omitempty"`
	ShortDescription    *string  `json:"shortDescription,omitempty"`
}
