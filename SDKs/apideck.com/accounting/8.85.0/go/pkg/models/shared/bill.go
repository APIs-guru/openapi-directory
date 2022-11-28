package shared

import (
	"time"
)

type BillStatusEnum string

const (
	BillStatusEnumDraft         BillStatusEnum = "draft"
	BillStatusEnumSubmitted     BillStatusEnum = "submitted"
	BillStatusEnumAuthorised    BillStatusEnum = "authorised"
	BillStatusEnumPartiallyPaid BillStatusEnum = "partially_paid"
	BillStatusEnumPaid          BillStatusEnum = "paid"
	BillStatusEnumVoid          BillStatusEnum = "void"
	BillStatusEnumCredit        BillStatusEnum = "credit"
	BillStatusEnumDeleted       BillStatusEnum = "deleted"
)

type BillInput struct {
	Balance       *float64                  `json:"balance,omitempty"`
	BillDate      *time.Time                `json:"bill_date,omitempty"`
	BillNumber    *string                   `json:"bill_number,omitempty"`
	Currency      *CurrencyEnum             `json:"currency,omitempty"`
	CurrencyRate  *float64                  `json:"currency_rate,omitempty"`
	Deposit       *float64                  `json:"deposit,omitempty"`
	DueDate       *time.Time                `json:"due_date,omitempty"`
	LedgerAccount *LinkedLedgerAccountInput `json:"ledger_account,omitempty"`
	LineItems     []BillLineItemInput       `json:"line_items,omitempty"`
	Notes         *string                   `json:"notes,omitempty"`
	PaidDate      *time.Time                `json:"paid_date,omitempty"`
	PoNumber      *string                   `json:"po_number,omitempty"`
	Reference     *string                   `json:"reference,omitempty"`
	RowVersion    *string                   `json:"row_version,omitempty"`
	Status        *BillStatusEnum           `json:"status,omitempty"`
	SubTotal      *float64                  `json:"sub_total,omitempty"`
	Supplier      *LinkedSupplierInput      `json:"supplier,omitempty"`
	TaxCode       *string                   `json:"tax_code,omitempty"`
	TaxInclusive  *bool                     `json:"tax_inclusive,omitempty"`
	Terms         *string                   `json:"terms,omitempty"`
	Total         *float64                  `json:"total,omitempty"`
	TotalTax      *float64                  `json:"total_tax,omitempty"`
}

type Bill struct {
	Balance       *float64             `json:"balance,omitempty"`
	BillDate      *time.Time           `json:"bill_date,omitempty"`
	BillNumber    *string              `json:"bill_number,omitempty"`
	CreatedAt     *time.Time           `json:"created_at,omitempty"`
	CreatedBy     *string              `json:"created_by,omitempty"`
	Currency      *CurrencyEnum        `json:"currency,omitempty"`
	CurrencyRate  *float64             `json:"currency_rate,omitempty"`
	Deposit       *float64             `json:"deposit,omitempty"`
	DownstreamID  *string              `json:"downstream_id,omitempty"`
	DueDate       *time.Time           `json:"due_date,omitempty"`
	ID            *string              `json:"id,omitempty"`
	LedgerAccount *LinkedLedgerAccount `json:"ledger_account,omitempty"`
	LineItems     []BillLineItem       `json:"line_items,omitempty"`
	Notes         *string              `json:"notes,omitempty"`
	PaidDate      *time.Time           `json:"paid_date,omitempty"`
	PoNumber      *string              `json:"po_number,omitempty"`
	Reference     *string              `json:"reference,omitempty"`
	RowVersion    *string              `json:"row_version,omitempty"`
	Status        *BillStatusEnum      `json:"status,omitempty"`
	SubTotal      *float64             `json:"sub_total,omitempty"`
	Supplier      *LinkedSupplier      `json:"supplier,omitempty"`
	TaxCode       *string              `json:"tax_code,omitempty"`
	TaxInclusive  *bool                `json:"tax_inclusive,omitempty"`
	Terms         *string              `json:"terms,omitempty"`
	Total         *float64             `json:"total,omitempty"`
	TotalTax      *float64             `json:"total_tax,omitempty"`
	UpdatedAt     *time.Time           `json:"updated_at,omitempty"`
	UpdatedBy     *string              `json:"updated_by,omitempty"`
}
