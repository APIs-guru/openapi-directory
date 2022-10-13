package shared

type PaymentLink struct {
	AccessToken    *string           `json:"AccessToken"`
	Client         *Client           `json:"Client"`
	ClientID       *int32            `json:"ClientId"`
	Currency       *Currency         `json:"Currency"`
	CurrencyID     *int32            `json:"CurrencyId"`
	DiscountAmount *float64          `json:"DiscountAmount"`
	ID             *int32            `json:"Id"`
	Invoice        *Invoice          `json:"Invoice"`
	Items          []PaymentLinkItem `json:"Items"`
	Number         *string           `json:"Number"`
	SubTotalAmount *float64          `json:"SubTotalAmount"`
	TaxAmount      *float64          `json:"TaxAmount"`
	TotalAmount    *float64          `json:"TotalAmount"`
	User           *User             `json:"User"`
	UserID         *int32            `json:"UserId"`
}
