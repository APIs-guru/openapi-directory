package shared

import (
	"time"
)

type InvoiceItemPurchaseDetails struct {
	TaxInclusive  *bool          `json:"tax_inclusive"`
	TaxRate       *LinkedTaxRate `json:"tax_rate"`
	UnitOfMeasure *string        `json:"unit_of_measure"`
	UnitPrice     *float64       `json:"unit_price"`
}

type InvoiceItemSalesDetails struct {
	TaxInclusive  *bool          `json:"tax_inclusive"`
	TaxRate       *LinkedTaxRate `json:"tax_rate"`
	UnitOfMeasure *string        `json:"unit_of_measure"`
	UnitPrice     *float64       `json:"unit_price"`
}

type InvoiceItemTypeTypeEnum string

const (
	InvoiceItemTypeTypeEnumInventory InvoiceItemTypeTypeEnum = "inventory"
	InvoiceItemTypeTypeEnumService   InvoiceItemTypeTypeEnum = "service"
	InvoiceItemTypeTypeEnumOther     InvoiceItemTypeTypeEnum = "other"
)

type InvoiceItem struct {
	Active          *bool                       `json:"active"`
	AssetAccount    *LinkedLedgerAccount        `json:"asset_account"`
	Code            *string                     `json:"code"`
	CreatedAt       *time.Time                  `json:"created_at"`
	CreatedBy       *string                     `json:"created_by"`
	Description     *string                     `json:"description"`
	ExpenseAccount  *LinkedLedgerAccount        `json:"expense_account"`
	ID              *string                     `json:"id"`
	IncomeAccount   *LinkedLedgerAccount        `json:"income_account"`
	InventoryDate   *time.Time                  `json:"inventory_date"`
	Name            *string                     `json:"name"`
	PurchaseDetails *InvoiceItemPurchaseDetails `json:"purchase_details"`
	Purchased       *bool                       `json:"purchased"`
	Quantity        *float64                    `json:"quantity"`
	RowVersion      *string                     `json:"row_version"`
	SalesDetails    *InvoiceItemSalesDetails    `json:"sales_details"`
	Sold            *bool                       `json:"sold"`
	Tracked         *bool                       `json:"tracked"`
	Type            *InvoiceItemTypeTypeEnum    `json:"type"`
	UnitPrice       *float64                    `json:"unit_price"`
	UpdatedAt       *time.Time                  `json:"updated_at"`
	UpdatedBy       *string                     `json:"updated_by"`
}
