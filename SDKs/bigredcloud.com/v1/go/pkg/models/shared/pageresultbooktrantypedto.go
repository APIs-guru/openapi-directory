package shared

type PageResultBookTranTypeDto struct {
	Count        *int64            `json:"Count,omitempty"`
	Items        []BookTranTypeDto `json:"Items,omitempty"`
	NextPageLink *string           `json:"NextPageLink,omitempty"`
}
