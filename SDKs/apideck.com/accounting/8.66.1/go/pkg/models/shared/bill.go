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
	Balance       *float64              `json:"balance"`
	BillDate      *time.Time            `json:"bill_date"`
	CreatedAt     *time.Time            `json:"created_at"`
	CreatedBy     *string               `json:"created_by"`
	Currency      *CurrencyEnum         `json:"currency"`
	CurrencyRate  *float64              `json:"currency_rate"`
	Deposit       *float64              `json:"deposit"`
	DownstreamID  *string               `json:"downstream_id"`
	DueDate       *time.Time            `json:"due_date"`
	ID            *string               `json:"id"`
	LedgerAccount *LinkedLedgerAccount  `json:"ledger_account"`
	LineItems     []BillLineItem        `json:"line_items"`
	Notes         *string               `json:"notes"`
	PaidDate      *time.Time            `json:"paid_date"`
	PoNumber      *string               `json:"po_number"`
	Reference     *string               `json:"reference"`
	RowVersion    *string               `json:"row_version"`
	Status        *BillStatusStatusEnum `json:"status"`
	SubTotal      *float64              `json:"sub_total"`
	Supplier      *LinkedSupplier       `json:"supplier"`
	TaxCode       *string               `json:"tax_code"`
	TaxInclusive  *bool                 `json:"tax_inclusive"`
	Terms         *string               `json:"terms"`
	Total         *float64              `json:"total"`
	TotalTax      *float64              `json:"total_tax"`
	UpdatedAt     *time.Time            `json:"updated_at"`
	UpdatedBy     *string               `json:"updated_by"`
}
