package shared

type PageResultBookTranTypeDto struct {
	Count        *int64            `json:"Count"`
	Items        []BookTranTypeDto `json:"Items"`
	NextPageLink *string           `json:"NextPageLink"`
}
