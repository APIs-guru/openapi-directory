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
	Amount      *float64         `json:"Amount"`
	ID          *int32           `json:"Id"`
	Invoice     *Invoice         `json:"Invoice"`
	InvoiceID   *int32           `json:"InvoiceId"`
	IsAutomatic *bool            `json:"IsAutomatic"`
	Note        *string          `json:"Note"`
	PaidOn      *time.Time       `json:"PaidOn"`
	ReferenceID *string          `json:"ReferenceId"`
	Type        *PaymentTypeEnum `json:"Type"`
}
