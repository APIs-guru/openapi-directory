package shared

type BillLineItemTypeTypeEnum string

const (
	BillLineItemTypeTypeEnumExpenseItem    BillLineItemTypeTypeEnum = "expense_item"
	BillLineItemTypeTypeEnumExpenseAccount BillLineItemTypeTypeEnum = "expense_account"
)

type BillLineItem struct {
	Code               *string                   `json:"code"`
	Description        *string                   `json:"description"`
	DiscountPercentage *float64                  `json:"discount_percentage"`
	ID                 *string                   `json:"id"`
	Item               *LinkedInvoiceItem        `json:"item"`
	LedgerAccount      *LinkedLedgerAccount      `json:"ledger_account"`
	LineNumber         *int64                    `json:"line_number"`
	Quantity           *float64                  `json:"quantity"`
	RowID              *string                   `json:"row_id"`
	RowVersion         *string                   `json:"row_version"`
	TaxAmount          *float64                  `json:"tax_amount"`
	TaxRate            *LinkedTaxRate            `json:"tax_rate"`
	TotalAmount        *float64                  `json:"total_amount"`
	Type               *BillLineItemTypeTypeEnum `json:"type"`
	UnitOfMeasure      *string                   `json:"unit_of_measure"`
	UnitPrice          *float64                  `json:"unit_price"`
}
