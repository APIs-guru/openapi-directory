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
	Allocations     []interface{}                         `json:"allocations"`
	Balance         *float64                              `json:"balance"`
	CreatedAt       *time.Time                            `json:"created_at"`
	Currency        *CurrencyEnum                         `json:"currency"`
	CurrencyRate    *float64                              `json:"currency_rate"`
	Customer        *LinkedCustomer                       `json:"customer"`
	DateIssued      *time.Time                            `json:"date_issued"`
	DatePaid        *time.Time                            `json:"date_paid"`
	ID              *string                               `json:"id"`
	LineItems       []InvoiceLineItem                     `json:"line_items"`
	Note            *string                               `json:"note"`
	Number          *string                               `json:"number"`
	Reference       *string                               `json:"reference"`
	RemainingCredit *float64                              `json:"remaining_credit"`
	RowVersion      *string                               `json:"row_version"`
	Status          *CreditNoteStatusCreditNoteStatusEnum `json:"status"`
	SubTotal        *float64                              `json:"sub_total"`
	TaxCode         *string                               `json:"tax_code"`
	TaxInclusive    *bool                                 `json:"tax_inclusive"`
	TotalAmount     float64                               `json:"total_amount"`
	TotalTax        *float64                              `json:"total_tax"`
	Type            *CreditNoteTypeCreditNoteTypeEnum     `json:"type"`
	UpdatedAt       *time.Time                            `json:"updated_at"`
}
