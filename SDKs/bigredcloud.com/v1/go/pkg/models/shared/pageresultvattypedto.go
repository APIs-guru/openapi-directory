package shared

type PageResultVatTypeDto struct {
	Count        *int64       `json:"Count,omitempty"`
	Items        []VatTypeDto `json:"Items,omitempty"`
	NextPageLink *string      `json:"NextPageLink,omitempty"`
}
