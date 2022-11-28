package shared

import (
	"time"
)

type InvoiceLineItemTypeEnum string

const (
	InvoiceLineItemTypeEnumSalesItem InvoiceLineItemTypeEnum = "sales_item"
	InvoiceLineItemTypeEnumDiscount  InvoiceLineItemTypeEnum = "discount"
	InvoiceLineItemTypeEnumInfo      InvoiceLineItemTypeEnum = "info"
	InvoiceLineItemTypeEnumSubTotal  InvoiceLineItemTypeEnum = "sub_total"
)

type InvoiceLineItemInput struct {
	Code               *string                   `json:"code,omitempty"`
	DepartmentID       *string                   `json:"department_id,omitempty"`
	Description        *string                   `json:"description,omitempty"`
	DiscountPercentage *float64                  `json:"discount_percentage,omitempty"`
	Item               *LinkedInvoiceItemInput   `json:"item,omitempty"`
	LedgerAccount      *LinkedLedgerAccountInput `json:"ledger_account,omitempty"`
	LineNumber         *int64                    `json:"line_number,omitempty"`
	LocationID         *string                   `json:"location_id,omitempty"`
	Quantity           *float64                  `json:"quantity,omitempty"`
	RowID              *string                   `json:"row_id,omitempty"`
	RowVersion         *string                   `json:"row_version,omitempty"`
	TaxAmount          *float64                  `json:"tax_amount,omitempty"`
	TaxRate            *LinkedTaxRateInput       `json:"tax_rate,omitempty"`
	TotalAmount        *float64                  `json:"total_amount,omitempty"`
	Type               *InvoiceLineItemTypeEnum  `json:"type,omitempty"`
	UnitOfMeasure      *string                   `json:"unit_of_measure,omitempty"`
	UnitPrice          *float64                  `json:"unit_price,omitempty"`
}

type InvoiceLineItem struct {
	Code               *string                  `json:"code,omitempty"`
	CreatedAt          *time.Time               `json:"created_at,omitempty"`
	CreatedBy          *string                  `json:"created_by,omitempty"`
	DepartmentID       *string                  `json:"department_id,omitempty"`
	Description        *string                  `json:"description,omitempty"`
	DiscountPercentage *float64                 `json:"discount_percentage,omitempty"`
	ID                 *string                  `json:"id,omitempty"`
	Item               *LinkedInvoiceItem       `json:"item,omitempty"`
	LedgerAccount      *LinkedLedgerAccount     `json:"ledger_account,omitempty"`
	LineNumber         *int64                   `json:"line_number,omitempty"`
	LocationID         *string                  `json:"location_id,omitempty"`
	Quantity           *float64                 `json:"quantity,omitempty"`
	RowID              *string                  `json:"row_id,omitempty"`
	RowVersion         *string                  `json:"row_version,omitempty"`
	TaxAmount          *float64                 `json:"tax_amount,omitempty"`
	TaxRate            *LinkedTaxRate           `json:"tax_rate,omitempty"`
	TotalAmount        *float64                 `json:"total_amount,omitempty"`
	Type               *InvoiceLineItemTypeEnum `json:"type,omitempty"`
	UnitOfMeasure      *string                  `json:"unit_of_measure,omitempty"`
	UnitPrice          *float64                 `json:"unit_price,omitempty"`
	UpdatedAt          *time.Time               `json:"updated_at,omitempty"`
	UpdatedBy          *string                  `json:"updated_by,omitempty"`
}
