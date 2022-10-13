package shared

import (
	"time"
)

type InvoiceFullDetailsAPIModelStatusEnum string

const (
	InvoiceFullDetailsAPIModelStatusEnumDraft   InvoiceFullDetailsAPIModelStatusEnum = "Draft"
	InvoiceFullDetailsAPIModelStatusEnumPaid    InvoiceFullDetailsAPIModelStatusEnum = "Paid"
	InvoiceFullDetailsAPIModelStatusEnumUnpaid  InvoiceFullDetailsAPIModelStatusEnum = "Unpaid"
	InvoiceFullDetailsAPIModelStatusEnumOverdue InvoiceFullDetailsAPIModelStatusEnum = "Overdue"
	InvoiceFullDetailsAPIModelStatusEnumVoid    InvoiceFullDetailsAPIModelStatusEnum = "Void"
)

type InvoiceFullDetailsAPIModel struct {
	AccessToken           *string                               `json:"AccessToken"`
	Activities            []InvoiceActivityAPIModel             `json:"Activities"`
	Attachments           []InvoiceAttachmentAPIModel           `json:"Attachments"`
	Client                *ClientDetailsAPIModel                `json:"Client"`
	ClonedFromID          *int32                                `json:"ClonedFromId"`
	Currency              *CurrencyDetailsAPIModel              `json:"Currency"`
	DiscountAmount        *float64                              `json:"DiscountAmount"`
	Duedate               *time.Time                            `json:"Duedate"`
	EnablePartialPayments *bool                                 `json:"EnablePartialPayments"`
	ID                    *int32                                `json:"Id"`
	InvoiceCategoryID     *int32                                `json:"InvoiceCategoryId"`
	IssuedOn              *time.Time                            `json:"IssuedOn"`
	Items                 []InvoiceItemAPIModel                 `json:"Items"`
	Notes                 *string                               `json:"Notes"`
	Number                *string                               `json:"Number"`
	PaymentGateways       []InvoiceGatewayAPIModel              `json:"PaymentGateways"`
	Payments              []InvoicePaymentAPIModel              `json:"Payments"`
	PoNumber              *string                               `json:"PoNumber"`
	RecurringProfile      *InvoiceRecurringAPIModel             `json:"RecurringProfile"`
	RecurringProfileID    *int32                                `json:"RecurringProfileId"`
	ShouldSendReminders   *bool                                 `json:"ShouldSendReminders"`
	Status                *InvoiceFullDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount        *float64                              `json:"SubTotalAmount"`
	TaxAmount             *float64                              `json:"TaxAmount"`
	Terms                 *string                               `json:"Terms"`
	TotalAmount           *float64                              `json:"TotalAmount"`
}
