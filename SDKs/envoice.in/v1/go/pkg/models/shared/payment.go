package shared

import (
	"time"
)

type PaymentTypeEnum string

const (
	PaymentTypeEnumOther        PaymentTypeEnum = "Other"
	PaymentTypeEnumPaypal       PaymentTypeEnum = "Paypal"
	PaymentTypeEnumStripe       PaymentTypeEnum = "Stripe"
	PaymentTypeEnumPayoneer     PaymentTypeEnum = "Payoneer"
	PaymentTypeEnumBank         PaymentTypeEnum = "Bank"
	PaymentTypeEnumCash         PaymentTypeEnum = "Cash"
	PaymentTypeEnumCheque       PaymentTypeEnum = "Cheque"
	PaymentTypeEnumAch          PaymentTypeEnum = "Ach"
	PaymentTypeEnumSepa         PaymentTypeEnum = "Sepa"
	PaymentTypeEnumSquare       PaymentTypeEnum = "Square"
	PaymentTypeEnumKlikAndPay   PaymentTypeEnum = "KlikAndPay"
	PaymentTypeEnumRazorpay     PaymentTypeEnum = "Razorpay"
	PaymentTypeEnumWepay        PaymentTypeEnum = "Wepay"
	PaymentTypeEnumHalkbank     PaymentTypeEnum = "Halkbank"
	PaymentTypeEnumTwoCheckout  PaymentTypeEnum = "TwoCheckout"
	PaymentTypeEnumPaymentWall  PaymentTypeEnum = "PaymentWall"
	PaymentTypeEnumBamboraEu    PaymentTypeEnum = "BamboraEU"
	PaymentTypeEnumBamboraNa    PaymentTypeEnum = "BamboraNA"
	PaymentTypeEnumNlb          PaymentTypeEnum = "Nlb"
	PaymentTypeEnumAuthorizeNet PaymentTypeEnum = "AuthorizeNet"
	PaymentTypeEnumBraintree    PaymentTypeEnum = "Braintree"
)

type Payment struct {
	Amount      *float64         `json:"Amount,omitempty"`
	ID          *int32           `json:"Id,omitempty"`
	Invoice     *Invoice         `json:"Invoice,omitempty"`
	InvoiceID   *int32           `json:"InvoiceId,omitempty"`
	IsAutomatic *bool            `json:"IsAutomatic,omitempty"`
	Note        *string          `json:"Note,omitempty"`
	PaidOn      *time.Time       `json:"PaidOn,omitempty"`
	ReferenceID *string          `json:"ReferenceId,omitempty"`
	Type        *PaymentTypeEnum `json:"Type,omitempty"`
}
