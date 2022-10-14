package shared

import (
	"time"
)

type BillStatusStatusEnum string

const (
	BillStatusStatusEnumDraft         BillStatusStatusEnum = "draft"
	BillStatusStatusEnumSubmitted     BillStatusStatusEnum = "submitted"
	BillStatusStatusEnumAuthorised    BillStatusStatusEnum = "authorised"
	BillStatusStatusEnumPartiallyPaid BillStatusStatusEnum = "partially_paid"
	BillStatusStatusEnumPaid          BillStatusStatusEnum = "paid"
	BillStatusStatusEnumVoid          BillStatusStatusEnum = "void"
	BillStatusStatusEnumCredit        BillStatusStatusEnum = "credit"
	BillStatusStatusEnumDeleted       BillStatusStatusEnum = "deleted"
)

type Bill struct {
	Balance       *float64              `json:"balance,omitempty"`
	BillDate      *time.Time            `json:"bill_date,omitempty"`
	CreatedAt     *time.Time            `json:"created_at,omitempty"`
	CreatedBy     *string               `json:"created_by,omitempty"`
	Currency      *CurrencyEnum         `json:"currency,omitempty"`
	CurrencyRate  *float64              `json:"currency_rate,omitempty"`
	Deposit       *float64              `json:"deposit,omitempty"`
	DownstreamID  *string               `json:"downstream_id,omitempty"`
	DueDate       *time.Time            `json:"due_date,omitempty"`
	ID            *string               `json:"id,omitempty"`
	LedgerAccount *LinkedLedgerAccount  `json:"ledger_account,omitempty"`
	LineItems     []BillLineItem        `json:"line_items,omitempty"`
	Notes         *string               `json:"notes,omitempty"`
	PaidDate      *time.Time            `json:"paid_date,omitempty"`
	PoNumber      *string               `json:"po_number,omitempty"`
	Reference     *string               `json:"reference,omitempty"`
	RowVersion    *string               `json:"row_version,omitempty"`
	Status        *BillStatusStatusEnum `json:"status,omitempty"`
	SubTotal      *float64              `json:"sub_total,omitempty"`
	Supplier      *LinkedSupplier       `json:"supplier,omitempty"`
	TaxCode       *string               `json:"tax_code,omitempty"`
	TaxInclusive  *bool                 `json:"tax_inclusive,omitempty"`
	Terms         *string               `json:"terms,omitempty"`
	Total         *float64              `json:"total,omitempty"`
	TotalTax      *float64              `json:"total_tax,omitempty"`
	UpdatedAt     *time.Time            `json:"updated_at,omitempty"`
	UpdatedBy     *string               `json:"updated_by,omitempty"`
}
