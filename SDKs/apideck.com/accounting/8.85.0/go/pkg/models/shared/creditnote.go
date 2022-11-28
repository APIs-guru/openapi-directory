package shared

import (
	"time"
)

type CreditNoteCreditNoteStatusEnum string

const (
	CreditNoteCreditNoteStatusEnumDraft      CreditNoteCreditNoteStatusEnum = "draft"
	CreditNoteCreditNoteStatusEnumAuthorised CreditNoteCreditNoteStatusEnum = "authorised"
	CreditNoteCreditNoteStatusEnumPaid       CreditNoteCreditNoteStatusEnum = "paid"
	CreditNoteCreditNoteStatusEnumVoided     CreditNoteCreditNoteStatusEnum = "voided"
	CreditNoteCreditNoteStatusEnumDeleted    CreditNoteCreditNoteStatusEnum = "deleted"
)

type CreditNoteCreditNoteTypeEnum string

const (
	CreditNoteCreditNoteTypeEnumAccountsReceivableCredit CreditNoteCreditNoteTypeEnum = "accounts_receivable_credit"
	CreditNoteCreditNoteTypeEnumAccountsPayableCredit    CreditNoteCreditNoteTypeEnum = "accounts_payable_credit"
)

type CreditNote struct {
	Account         *LinkedLedgerAccount            `json:"account,omitempty"`
	Allocations     []interface{}                   `json:"allocations,omitempty"`
	Balance         *float64                        `json:"balance,omitempty"`
	CreatedAt       *time.Time                      `json:"created_at,omitempty"`
	CreatedBy       *string                         `json:"created_by,omitempty"`
	Currency        *CurrencyEnum                   `json:"currency,omitempty"`
	CurrencyRate    *float64                        `json:"currency_rate,omitempty"`
	Customer        *LinkedCustomer                 `json:"customer,omitempty"`
	DateIssued      *time.Time                      `json:"date_issued,omitempty"`
	DatePaid        *time.Time                      `json:"date_paid,omitempty"`
	ID              *string                         `json:"id,omitempty"`
	LineItems       []InvoiceLineItem               `json:"line_items,omitempty"`
	Note            *string                         `json:"note,omitempty"`
	Number          *string                         `json:"number,omitempty"`
	Reference       *string                         `json:"reference,omitempty"`
	RemainingCredit *float64                        `json:"remaining_credit,omitempty"`
	RowVersion      *string                         `json:"row_version,omitempty"`
	Status          *CreditNoteCreditNoteStatusEnum `json:"status,omitempty"`
	SubTotal        *float64                        `json:"sub_total,omitempty"`
	TaxCode         *string                         `json:"tax_code,omitempty"`
	TaxInclusive    *bool                           `json:"tax_inclusive,omitempty"`
	TotalAmount     float64                         `json:"total_amount"`
	TotalTax        *float64                        `json:"total_tax,omitempty"`
	Type            *CreditNoteCreditNoteTypeEnum   `json:"type,omitempty"`
	UpdatedAt       *time.Time                      `json:"updated_at,omitempty"`
	UpdatedBy       *string                         `json:"updated_by,omitempty"`
}

type CreditNoteInput struct {
	Account         *LinkedLedgerAccountInput       `json:"account,omitempty"`
	Allocations     []interface{}                   `json:"allocations,omitempty"`
	Balance         *float64                        `json:"balance,omitempty"`
	Currency        *CurrencyEnum                   `json:"currency,omitempty"`
	CurrencyRate    *float64                        `json:"currency_rate,omitempty"`
	Customer        *LinkedCustomerInput            `json:"customer,omitempty"`
	DateIssued      *time.Time                      `json:"date_issued,omitempty"`
	DatePaid        *time.Time                      `json:"date_paid,omitempty"`
	LineItems       []InvoiceLineItemInput          `json:"line_items,omitempty"`
	Note            *string                         `json:"note,omitempty"`
	Number          *string                         `json:"number,omitempty"`
	Reference       *string                         `json:"reference,omitempty"`
	RemainingCredit *float64                        `json:"remaining_credit,omitempty"`
	RowVersion      *string                         `json:"row_version,omitempty"`
	Status          *CreditNoteCreditNoteStatusEnum `json:"status,omitempty"`
	SubTotal        *float64                        `json:"sub_total,omitempty"`
	TaxCode         *string                         `json:"tax_code,omitempty"`
	TaxInclusive    *bool                           `json:"tax_inclusive,omitempty"`
	TotalAmount     float64                         `json:"total_amount"`
	TotalTax        *float64                        `json:"total_tax,omitempty"`
	Type            *CreditNoteCreditNoteTypeEnum   `json:"type,omitempty"`
}
