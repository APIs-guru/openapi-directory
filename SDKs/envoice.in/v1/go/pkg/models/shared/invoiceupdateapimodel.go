package shared

import (
	"time"
)

type InvoiceUpdateAPIModelStatusEnum string

const (
	InvoiceUpdateAPIModelStatusEnumDraft   InvoiceUpdateAPIModelStatusEnum = "Draft"
	InvoiceUpdateAPIModelStatusEnumPaid    InvoiceUpdateAPIModelStatusEnum = "Paid"
	InvoiceUpdateAPIModelStatusEnumUnpaid  InvoiceUpdateAPIModelStatusEnum = "Unpaid"
	InvoiceUpdateAPIModelStatusEnumOverdue InvoiceUpdateAPIModelStatusEnum = "Overdue"
	InvoiceUpdateAPIModelStatusEnumVoid    InvoiceUpdateAPIModelStatusEnum = "Void"
)

type InvoiceUpdateAPIModel struct {
	Attachments         []InvoiceUpdateAttachmentAPIModel `json:"Attachments,omitempty"`
	ClientID            *int32                            `json:"ClientId,omitempty"`
	ClonedFromID        *int32                            `json:"ClonedFromId,omitempty"`
	CurrencyID          *int32                            `json:"CurrencyId,omitempty"`
	Duedate             *time.Time                        `json:"Duedate,omitempty"`
	ID                  *int32                            `json:"Id,omitempty"`
	InvoiceCategoryID   *int32                            `json:"InvoiceCategoryId,omitempty"`
	IssuedOn            *time.Time                        `json:"IssuedOn,omitempty"`
	Items               []InvoiceUpdateItemAPIModel       `json:"Items,omitempty"`
	Notes               *string                           `json:"Notes,omitempty"`
	Number              *string                           `json:"Number,omitempty"`
	PaymentGateways     []InvoiceGatewayAPIModel          `json:"PaymentGateways,omitempty"`
	PoNumber            *string                           `json:"PoNumber,omitempty"`
	RecurringProfile    *InvoiceRecurringAPIModel         `json:"RecurringProfile,omitempty"`
	RecurringProfileID  *int32                            `json:"RecurringProfileId,omitempty"`
	ShouldSendReminders *bool                             `json:"ShouldSendReminders,omitempty"`
	Status              *InvoiceUpdateAPIModelStatusEnum  `json:"Status,omitempty"`
	Terms               *string                           `json:"Terms,omitempty"`
}
