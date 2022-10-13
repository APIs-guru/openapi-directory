package shared

type PageResultVatRateDto struct {
	Count        *int64       `json:"Count"`
	Items        []VatRateDto `json:"Items"`
	NextPageLink *string      `json:"NextPageLink"`
}
