package shared

import (
	"time"
)

type CreditNoteStatusCreditNoteStatusEnum string

const (
	CreditNoteStatusCreditNoteStatusEnumDraft      CreditNoteStatusCreditNoteStatusEnum = "draft"
	CreditNoteStatusCreditNoteStatusEnumAuthorised CreditNoteStatusCreditNoteStatusEnum = "authorised"
	CreditNoteStatusCreditNoteStatusEnumPaid       CreditNoteStatusCreditNoteStatusEnum = "paid"
	CreditNoteStatusCreditNoteStatusEnumVoided     CreditNoteStatusCreditNoteStatusEnum = "voided"
	CreditNoteStatusCreditNoteStatusEnumDeleted    CreditNoteStatusCreditNoteStatusEnum = "deleted"
)

type CreditNoteTypeCreditNoteTypeEnum string

const (
	CreditNoteTypeCreditNoteTypeEnumAccountsReceivableCredit CreditNoteTypeCreditNoteTypeEnum = "accounts_receivable_credit"
	CreditNoteTypeCreditNoteTypeEnumAccountsPayableCredit    CreditNoteTypeCreditNoteTypeEnum = "accounts_payable_credit"
)

type CreditNote struct {
	Allocations     []interface{}                         `json:"allocations,omitempty"`
	Balance         *float64                              `json:"balance,omitempty"`
	CreatedAt       *time.Time                            `json:"created_at,omitempty"`
	Currency        *CurrencyEnum                         `json:"currency,omitempty"`
	CurrencyRate    *float64                              `json:"currency_rate,omitempty"`
	Customer        *LinkedCustomer                       `json:"customer,omitempty"`
	DateIssued      *time.Time                            `json:"date_issued,omitempty"`
	DatePaid        *time.Time                            `json:"date_paid,omitempty"`
	ID              *string                               `json:"id,omitempty"`
	LineItems       []InvoiceLineItem                     `json:"line_items,omitempty"`
	Note            *string                               `json:"note,omitempty"`
	Number          *string                               `json:"number,omitempty"`
	Reference       *string                               `json:"reference,omitempty"`
	RemainingCredit *float64                              `json:"remaining_credit,omitempty"`
	RowVersion      *string                               `json:"row_version,omitempty"`
	Status          *CreditNoteStatusCreditNoteStatusEnum `json:"status,omitempty"`
	SubTotal        *float64                              `json:"sub_total,omitempty"`
	TaxCode         *string                               `json:"tax_code,omitempty"`
	TaxInclusive    *bool                                 `json:"tax_inclusive,omitempty"`
	TotalAmount     float64                               `json:"total_amount"`
	TotalTax        *float64                              `json:"total_tax,omitempty"`
	Type            *CreditNoteTypeCreditNoteTypeEnum     `json:"type,omitempty"`
	UpdatedAt       *time.Time                            `json:"updated_at,omitempty"`
}
