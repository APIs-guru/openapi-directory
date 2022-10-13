package shared

type PageResultUserDefinedFieldDto struct {
	Count        *int64                `json:"Count"`
	Items        []UserDefinedFieldDto `json:"Items"`
	NextPageLink *string               `json:"NextPageLink"`
}
