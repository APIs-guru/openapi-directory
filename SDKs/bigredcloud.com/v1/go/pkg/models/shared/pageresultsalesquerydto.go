package shared

type PageResultSalesQueryDto struct {
	Count        *int64          `json:"Count,omitempty"`
	Items        []SalesQueryDto `json:"Items,omitempty"`
	NextPageLink *string         `json:"NextPageLink,omitempty"`
}
