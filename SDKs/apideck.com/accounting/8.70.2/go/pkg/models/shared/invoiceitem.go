package shared

import (
	"time"
)

type InvoiceItemPurchaseDetails struct {
	TaxInclusive  *bool          `json:"tax_inclusive,omitempty"`
	TaxRate       *LinkedTaxRate `json:"tax_rate,omitempty"`
	UnitOfMeasure *string        `json:"unit_of_measure,omitempty"`
	UnitPrice     *float64       `json:"unit_price,omitempty"`
}

type InvoiceItemSalesDetails struct {
	TaxInclusive  *bool          `json:"tax_inclusive,omitempty"`
	TaxRate       *LinkedTaxRate `json:"tax_rate,omitempty"`
	UnitOfMeasure *string        `json:"unit_of_measure,omitempty"`
	UnitPrice     *float64       `json:"unit_price,omitempty"`
}

type InvoiceItemTypeEnum string

const (
	InvoiceItemTypeEnumInventory InvoiceItemTypeEnum = "inventory"
	InvoiceItemTypeEnumService   InvoiceItemTypeEnum = "service"
	InvoiceItemTypeEnumOther     InvoiceItemTypeEnum = "other"
)

type InvoiceItem struct {
	Active          *bool                       `json:"active,omitempty"`
	AssetAccount    *LinkedLedgerAccount        `json:"asset_account,omitempty"`
	Code            *string                     `json:"code,omitempty"`
	CreatedAt       *time.Time                  `json:"created_at,omitempty"`
	CreatedBy       *string                     `json:"created_by,omitempty"`
	Description     *string                     `json:"description,omitempty"`
	ExpenseAccount  *LinkedLedgerAccount        `json:"expense_account,omitempty"`
	ID              *string                     `json:"id,omitempty"`
	IncomeAccount   *LinkedLedgerAccount        `json:"income_account,omitempty"`
	InventoryDate   *time.Time                  `json:"inventory_date,omitempty"`
	Name            *string                     `json:"name,omitempty"`
	PurchaseDetails *InvoiceItemPurchaseDetails `json:"purchase_details,omitempty"`
	Purchased       *bool                       `json:"purchased,omitempty"`
	Quantity        *float64                    `json:"quantity,omitempty"`
	RowVersion      *string                     `json:"row_version,omitempty"`
	SalesDetails    *InvoiceItemSalesDetails    `json:"sales_details,omitempty"`
	Sold            *bool                       `json:"sold,omitempty"`
	Tracked         *bool                       `json:"tracked,omitempty"`
	Type            *InvoiceItemTypeEnum        `json:"type,omitempty"`
	UnitPrice       *float64                    `json:"unit_price,omitempty"`
	UpdatedAt       *time.Time                  `json:"updated_at,omitempty"`
	UpdatedBy       *string                     `json:"updated_by,omitempty"`
}
