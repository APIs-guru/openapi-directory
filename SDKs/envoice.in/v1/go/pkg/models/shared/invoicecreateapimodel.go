package shared

import (
	"time"
)

type InvoiceCreateAPIModelStatusEnum string

const (
	InvoiceCreateAPIModelStatusEnumDraft   InvoiceCreateAPIModelStatusEnum = "Draft"
	InvoiceCreateAPIModelStatusEnumPaid    InvoiceCreateAPIModelStatusEnum = "Paid"
	InvoiceCreateAPIModelStatusEnumUnpaid  InvoiceCreateAPIModelStatusEnum = "Unpaid"
	InvoiceCreateAPIModelStatusEnumOverdue InvoiceCreateAPIModelStatusEnum = "Overdue"
	InvoiceCreateAPIModelStatusEnumVoid    InvoiceCreateAPIModelStatusEnum = "Void"
)

type InvoiceCreateAPIModel struct {
	Attachments         []InvoiceCreateAttachmentAPIModel `json:"Attachments,omitempty"`
	ClientID            *int32                            `json:"ClientId,omitempty"`
	ClonedFromID        *int32                            `json:"ClonedFromId,omitempty"`
	CurrencyID          *int32                            `json:"CurrencyId,omitempty"`
	Duedate             *time.Time                        `json:"Duedate,omitempty"`
	InvoiceCategoryID   *int32                            `json:"InvoiceCategoryId,omitempty"`
	IssuedOn            *time.Time                        `json:"IssuedOn,omitempty"`
	Items               []InvoiceCreateItemAPIModel       `json:"Items,omitempty"`
	Notes               *string                           `json:"Notes,omitempty"`
	Number              *string                           `json:"Number,omitempty"`
	PaymentGateways     []InvoiceGatewayAPIModel          `json:"PaymentGateways,omitempty"`
	PoNumber            *string                           `json:"PoNumber,omitempty"`
	RecurringProfile    *InvoiceRecurringAPIModel         `json:"RecurringProfile,omitempty"`
	RecurringProfileID  *int32                            `json:"RecurringProfileId,omitempty"`
	ShouldSendReminders *bool                             `json:"ShouldSendReminders,omitempty"`
	Status              *InvoiceCreateAPIModelStatusEnum  `json:"Status,omitempty"`
	Terms               *string                           `json:"Terms,omitempty"`
}
