package shared




type BillLineItemTypeEnum string

const (
    BillLineItemTypeEnumExpenseItem BillLineItemTypeEnum = "expense_item"
BillLineItemTypeEnumExpenseAccount BillLineItemTypeEnum = "expense_account"
)


type BillLineItem struct {
    Code *string `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    DiscountPercentage *float64 `json:"discount_percentage,omitempty"`
    ID *string `json:"id,omitempty"`
    Item *LinkedInvoiceItem `json:"item,omitempty"`
    LedgerAccount *LinkedLedgerAccount `json:"ledger_account,omitempty"`
    LineNumber *int64 `json:"line_number,omitempty"`
    Quantity *float64 `json:"quantity,omitempty"`
    RowID *string `json:"row_id,omitempty"`
    RowVersion *string `json:"row_version,omitempty"`
    TaxAmount *float64 `json:"tax_amount,omitempty"`
    TaxRate *LinkedTaxRate `json:"tax_rate,omitempty"`
    TotalAmount *float64 `json:"total_amount,omitempty"`
    Type *BillLineItemTypeEnum `json:"type,omitempty"`
    UnitOfMeasure *string `json:"unit_of_measure,omitempty"`
    UnitPrice *float64 `json:"unit_price,omitempty"`
    
}

