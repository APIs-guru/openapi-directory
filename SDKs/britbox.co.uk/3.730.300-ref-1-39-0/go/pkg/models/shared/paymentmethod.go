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
	Balance     *float32                `json:"balance"`
	Brand       *PaymentMethodBrandEnum `json:"brand"`
	Currency    *string                 `json:"currency"`
	Description string                  `json:"description"`
	ExpiryMonth *float64                `json:"expiryMonth"`
	ExpiryYear  *float64                `json:"expiryYear"`
	ID          string                  `json:"id"`
	LastDigits  *float64                `json:"lastDigits"`
	Type        PaymentMethodTypeEnum   `json:"type"`
}
