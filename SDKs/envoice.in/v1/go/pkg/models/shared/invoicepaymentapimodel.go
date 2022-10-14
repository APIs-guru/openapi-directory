package shared

import (
	"time"
)

type InvoicePaymentAPIModelTypeEnum string

const (
	InvoicePaymentAPIModelTypeEnumOther        InvoicePaymentAPIModelTypeEnum = "Other"
	InvoicePaymentAPIModelTypeEnumPaypal       InvoicePaymentAPIModelTypeEnum = "Paypal"
	InvoicePaymentAPIModelTypeEnumStripe       InvoicePaymentAPIModelTypeEnum = "Stripe"
	InvoicePaymentAPIModelTypeEnumPayoneer     InvoicePaymentAPIModelTypeEnum = "Payoneer"
	InvoicePaymentAPIModelTypeEnumBank         InvoicePaymentAPIModelTypeEnum = "Bank"
	InvoicePaymentAPIModelTypeEnumCash         InvoicePaymentAPIModelTypeEnum = "Cash"
	InvoicePaymentAPIModelTypeEnumCheque       InvoicePaymentAPIModelTypeEnum = "Cheque"
	InvoicePaymentAPIModelTypeEnumAch          InvoicePaymentAPIModelTypeEnum = "Ach"
	InvoicePaymentAPIModelTypeEnumSepa         InvoicePaymentAPIModelTypeEnum = "Sepa"
	InvoicePaymentAPIModelTypeEnumSquare       InvoicePaymentAPIModelTypeEnum = "Square"
	InvoicePaymentAPIModelTypeEnumKlikAndPay   InvoicePaymentAPIModelTypeEnum = "KlikAndPay"
	InvoicePaymentAPIModelTypeEnumRazorpay     InvoicePaymentAPIModelTypeEnum = "Razorpay"
	InvoicePaymentAPIModelTypeEnumWepay        InvoicePaymentAPIModelTypeEnum = "Wepay"
	InvoicePaymentAPIModelTypeEnumHalkbank     InvoicePaymentAPIModelTypeEnum = "Halkbank"
	InvoicePaymentAPIModelTypeEnumTwoCheckout  InvoicePaymentAPIModelTypeEnum = "TwoCheckout"
	InvoicePaymentAPIModelTypeEnumPaymentWall  InvoicePaymentAPIModelTypeEnum = "PaymentWall"
	InvoicePaymentAPIModelTypeEnumBamboraEu    InvoicePaymentAPIModelTypeEnum = "BamboraEU"
	InvoicePaymentAPIModelTypeEnumBamboraNa    InvoicePaymentAPIModelTypeEnum = "BamboraNA"
	InvoicePaymentAPIModelTypeEnumNlb          InvoicePaymentAPIModelTypeEnum = "Nlb"
	InvoicePaymentAPIModelTypeEnumAuthorizeNet InvoicePaymentAPIModelTypeEnum = "AuthorizeNet"
	InvoicePaymentAPIModelTypeEnumBraintree    InvoicePaymentAPIModelTypeEnum = "Braintree"
)

type InvoicePaymentAPIModel struct {
	Amount      *float64                        `json:"Amount,omitempty"`
	ID          *int32                          `json:"Id,omitempty"`
	IsAutomatic *bool                           `json:"IsAutomatic,omitempty"`
	Note        *string                         `json:"Note,omitempty"`
	PaidOn      *time.Time                      `json:"PaidOn,omitempty"`
	ReferenceID *string                         `json:"ReferenceId,omitempty"`
	Type        *InvoicePaymentAPIModelTypeEnum `json:"Type,omitempty"`
}
