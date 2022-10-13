package shared

type PageResultSalesQueryDto struct {
	Count        *int64          `json:"Count"`
	Items        []SalesQueryDto `json:"Items"`
	NextPageLink *string         `json:"NextPageLink"`
}
