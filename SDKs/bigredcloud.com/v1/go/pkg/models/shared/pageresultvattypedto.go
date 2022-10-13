package shared

type PageResultVatTypeDto struct {
	Count        *int64       `json:"Count"`
	Items        []VatTypeDto `json:"Items"`
	NextPageLink *string      `json:"NextPageLink"`
}
