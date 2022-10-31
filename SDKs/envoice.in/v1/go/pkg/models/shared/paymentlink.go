package shared



type PaymentLink struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    Client *Client `json:"Client,omitempty"`
    ClientID *int32 `json:"ClientId,omitempty"`
    Currency *Currency `json:"Currency,omitempty"`
    CurrencyID *int32 `json:"CurrencyId,omitempty"`
    DiscountAmount *float64 `json:"DiscountAmount,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    Invoice *Invoice `json:"Invoice,omitempty"`
    Items []PaymentLinkItem `json:"Items,omitempty"`
    Number *string `json:"Number,omitempty"`
    SubTotalAmount *float64 `json:"SubTotalAmount,omitempty"`
    TaxAmount *float64 `json:"TaxAmount,omitempty"`
    TotalAmount *float64 `json:"TotalAmount,omitempty"`
    User *User `json:"User,omitempty"`
    UserID *int32 `json:"UserId,omitempty"`
    
}

