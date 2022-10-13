package shared

import (
	"time"
)

type InvoiceDetailsAPIModelStatusEnum string

const (
	InvoiceDetailsAPIModelStatusEnumDraft   InvoiceDetailsAPIModelStatusEnum = "Draft"
	InvoiceDetailsAPIModelStatusEnumPaid    InvoiceDetailsAPIModelStatusEnum = "Paid"
	InvoiceDetailsAPIModelStatusEnumUnpaid  InvoiceDetailsAPIModelStatusEnum = "Unpaid"
	InvoiceDetailsAPIModelStatusEnumOverdue InvoiceDetailsAPIModelStatusEnum = "Overdue"
	InvoiceDetailsAPIModelStatusEnumVoid    InvoiceDetailsAPIModelStatusEnum = "Void"
)

type InvoiceDetailsAPIModel struct {
	AccessToken           *string                           `json:"AccessToken"`
	Client                *ClientDetailsAPIModel            `json:"Client"`
	ClonedFromID          *int32                            `json:"ClonedFromId"`
	Currency              *CurrencyDetailsAPIModel          `json:"Currency"`
	DiscountAmount        *float64                          `json:"DiscountAmount"`
	Duedate               *time.Time                        `json:"Duedate"`
	EnablePartialPayments *bool                             `json:"EnablePartialPayments"`
	ID                    *int32                            `json:"Id"`
	InvoiceCategoryID     *int32                            `json:"InvoiceCategoryId"`
	IssuedOn              *time.Time                        `json:"IssuedOn"`
	Notes                 *string                           `json:"Notes"`
	Number                *string                           `json:"Number"`
	PoNumber              *string                           `json:"PoNumber"`
	RecurringProfile      *InvoiceRecurringAPIModel         `json:"RecurringProfile"`
	RecurringProfileID    *int32                            `json:"RecurringProfileId"`
	ShouldSendReminders   *bool                             `json:"ShouldSendReminders"`
	Status                *InvoiceDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount        *float64                          `json:"SubTotalAmount"`
	TaxAmount             *float64                          `json:"TaxAmount"`
	Terms                 *string                           `json:"Terms"`
	TotalAmount           *float64                          `json:"TotalAmount"`
}
