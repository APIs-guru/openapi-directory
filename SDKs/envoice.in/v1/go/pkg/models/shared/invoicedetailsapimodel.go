package shared

import (
"time")


type InvoiceDetailsAPIModelStatusEnum string

const (
    InvoiceDetailsAPIModelStatusEnumDraft InvoiceDetailsAPIModelStatusEnum = "Draft"
InvoiceDetailsAPIModelStatusEnumPaid InvoiceDetailsAPIModelStatusEnum = "Paid"
InvoiceDetailsAPIModelStatusEnumUnpaid InvoiceDetailsAPIModelStatusEnum = "Unpaid"
InvoiceDetailsAPIModelStatusEnumOverdue InvoiceDetailsAPIModelStatusEnum = "Overdue"
InvoiceDetailsAPIModelStatusEnumVoid InvoiceDetailsAPIModelStatusEnum = "Void"
)


type InvoiceDetailsAPIModel struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    Client *ClientDetailsAPIModel `json:"Client,omitempty"`
    ClonedFromID *int32 `json:"ClonedFromId,omitempty"`
    Currency *CurrencyDetailsAPIModel `json:"Currency,omitempty"`
    DiscountAmount *float64 `json:"DiscountAmount,omitempty"`
    Duedate *time.Time `json:"Duedate,omitempty"`
    EnablePartialPayments *bool `json:"EnablePartialPayments,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    InvoiceCategoryID *int32 `json:"InvoiceCategoryId,omitempty"`
    IssuedOn *time.Time `json:"IssuedOn,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    Number *string `json:"Number,omitempty"`
    PoNumber *string `json:"PoNumber,omitempty"`
    RecurringProfile *InvoiceRecurringAPIModel `json:"RecurringProfile,omitempty"`
    RecurringProfileID *int32 `json:"RecurringProfileId,omitempty"`
    ShouldSendReminders *bool `json:"ShouldSendReminders,omitempty"`
    Status *InvoiceDetailsAPIModelStatusEnum `json:"Status,omitempty"`
    SubTotalAmount *float64 `json:"SubTotalAmount,omitempty"`
    TaxAmount *float64 `json:"TaxAmount,omitempty"`
    Terms *string `json:"Terms,omitempty"`
    TotalAmount *float64 `json:"TotalAmount,omitempty"`
    
}

