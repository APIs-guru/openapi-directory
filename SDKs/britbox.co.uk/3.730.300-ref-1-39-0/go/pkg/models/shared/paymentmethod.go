package shared

type PaymentMethodBrandEnum string

const (
	PaymentMethodBrandEnumVisa            PaymentMethodBrandEnum = "Visa"
	PaymentMethodBrandEnumMasterCard      PaymentMethodBrandEnum = "MasterCard"
	PaymentMethodBrandEnumAmericanExpress PaymentMethodBrandEnum = "AmericanExpress"
	PaymentMethodBrandEnumOther           PaymentMethodBrandEnum = "Other"
)

type PaymentMethodTypeEnum string

const (
	PaymentMethodTypeEnumCard   PaymentMethodTypeEnum = "Card"
	PaymentMethodTypeEnumWallet PaymentMethodTypeEnum = "Wallet"
)

type PaymentMethod struct {
	Balance     *float32                `json:"balance,omitempty"`
	Brand       *PaymentMethodBrandEnum `json:"brand,omitempty"`
	Currency    *string                 `json:"currency,omitempty"`
	Description string                  `json:"description"`
	ExpiryMonth *float64                `json:"expiryMonth,omitempty"`
	ExpiryYear  *float64                `json:"expiryYear,omitempty"`
	ID          string                  `json:"id"`
	LastDigits  *float64                `json:"lastDigits,omitempty"`
	Type        PaymentMethodTypeEnum   `json:"type"`
}
