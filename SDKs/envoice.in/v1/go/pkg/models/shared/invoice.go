package shared

import (
	"time"
)

type InvoiceStatusEnum string

const (
	InvoiceStatusEnumDraft   InvoiceStatusEnum = "Draft"
	InvoiceStatusEnumPaid    InvoiceStatusEnum = "Paid"
	InvoiceStatusEnumUnpaid  InvoiceStatusEnum = "Unpaid"
	InvoiceStatusEnumOverdue InvoiceStatusEnum = "Overdue"
	InvoiceStatusEnumVoid    InvoiceStatusEnum = "Void"
)

type Invoice struct {
	AccessToken           *string                    `json:"AccessToken"`
	Activities            []Activity                 `json:"Activities"`
	Attachments           []InvoiceAttachment        `json:"Attachments"`
	ClientID              *int32                     `json:"ClientId"`
	ClonedFromID          *int32                     `json:"ClonedFromId"`
	CurrencyID            *int32                     `json:"CurrencyId"`
	DiscountAmount        *float64                   `json:"DiscountAmount"`
	Duedate               *time.Time                 `json:"Duedate"`
	EnablePartialPayments *bool                      `json:"EnablePartialPayments"`
	EstimationID          *int32                     `json:"EstimationId"`
	ID                    *int32                     `json:"Id"`
	InvoiceCategoryID     *int32                     `json:"InvoiceCategoryId"`
	IssuedOn              *time.Time                 `json:"IssuedOn"`
	Items                 []InvoiceItem              `json:"Items"`
	Notes                 *string                    `json:"Notes"`
	Number                *string                    `json:"Number"`
	OrderID               *int32                     `json:"OrderId"`
	PaymentGateways       []PaymentGatewayForInvoice `json:"PaymentGateways"`
	PaymentLinkID         *int32                     `json:"PaymentLinkId"`
	Payments              []Payment                  `json:"Payments"`
	PoNumber              *string                    `json:"PoNumber"`
	RecurringProfileID    *int32                     `json:"RecurringProfileId"`
	ShouldSendReminders   *bool                      `json:"ShouldSendReminders"`
	Status                *InvoiceStatusEnum         `json:"Status"`
	SubTotalAmount        *float64                   `json:"SubTotalAmount"`
	TaxAmount             *float64                   `json:"TaxAmount"`
	Terms                 *string                    `json:"Terms"`
	TotalAmount           *float64                   `json:"TotalAmount"`
	UserID                *int32                     `json:"UserId"`
}
