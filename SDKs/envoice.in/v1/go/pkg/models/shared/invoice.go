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
	AccessToken           *string                    `json:"AccessToken,omitempty"`
	Activities            []Activity                 `json:"Activities,omitempty"`
	Attachments           []InvoiceAttachment        `json:"Attachments,omitempty"`
	ClientID              *int32                     `json:"ClientId,omitempty"`
	ClonedFromID          *int32                     `json:"ClonedFromId,omitempty"`
	CurrencyID            *int32                     `json:"CurrencyId,omitempty"`
	DiscountAmount        *float64                   `json:"DiscountAmount,omitempty"`
	Duedate               *time.Time                 `json:"Duedate,omitempty"`
	EnablePartialPayments *bool                      `json:"EnablePartialPayments,omitempty"`
	EstimationID          *int32                     `json:"EstimationId,omitempty"`
	ID                    *int32                     `json:"Id,omitempty"`
	InvoiceCategoryID     *int32                     `json:"InvoiceCategoryId,omitempty"`
	IssuedOn              *time.Time                 `json:"IssuedOn,omitempty"`
	Items                 []InvoiceItem              `json:"Items,omitempty"`
	Notes                 *string                    `json:"Notes,omitempty"`
	Number                *string                    `json:"Number,omitempty"`
	OrderID               *int32                     `json:"OrderId,omitempty"`
	PaymentGateways       []PaymentGatewayForInvoice `json:"PaymentGateways,omitempty"`
	PaymentLinkID         *int32                     `json:"PaymentLinkId,omitempty"`
	Payments              []Payment                  `json:"Payments,omitempty"`
	PoNumber              *string                    `json:"PoNumber,omitempty"`
	RecurringProfileID    *int32                     `json:"RecurringProfileId,omitempty"`
	ShouldSendReminders   *bool                      `json:"ShouldSendReminders,omitempty"`
	Status                *InvoiceStatusEnum         `json:"Status,omitempty"`
	SubTotalAmount        *float64                   `json:"SubTotalAmount,omitempty"`
	TaxAmount             *float64                   `json:"TaxAmount,omitempty"`
	Terms                 *string                    `json:"Terms,omitempty"`
	TotalAmount           *float64                   `json:"TotalAmount,omitempty"`
	UserID                *int32                     `json:"UserId,omitempty"`
}
