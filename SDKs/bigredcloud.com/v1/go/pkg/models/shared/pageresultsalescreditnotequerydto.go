package shared

type PageResultSalesCreditNoteQueryDto struct {
	Count        *int64                    `json:"Count"`
	Items        []SalesCreditNoteQueryDto `json:"Items"`
	NextPageLink *string                   `json:"NextPageLink"`
}
