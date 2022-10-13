package shared

type PageResultSupplierQueryDto struct {
	Count        *int64             `json:"Count"`
	Items        []SupplierQueryDto `json:"Items"`
	NextPageLink *string            `json:"NextPageLink"`
}
