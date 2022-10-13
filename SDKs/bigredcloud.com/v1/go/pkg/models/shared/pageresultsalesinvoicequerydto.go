package shared

type PageResultSalesInvoiceQueryDto struct {
	Count        *int64                 `json:"Count"`
	Items        []SalesInvoiceQueryDto `json:"Items"`
	NextPageLink *string                `json:"NextPageLink"`
}
