package shared

type PageResultSalesInvoiceQueryDto struct {
	Count        *int64                 `json:"Count,omitempty"`
	Items        []SalesInvoiceQueryDto `json:"Items,omitempty"`
	NextPageLink *string                `json:"NextPageLink,omitempty"`
}
