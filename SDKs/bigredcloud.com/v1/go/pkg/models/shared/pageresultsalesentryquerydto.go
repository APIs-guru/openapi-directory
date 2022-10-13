package shared

type PageResultSalesEntryQueryDto struct {
	Count        *int64               `json:"Count"`
	Items        []SalesEntryQueryDto `json:"Items"`
	NextPageLink *string              `json:"NextPageLink"`
}
