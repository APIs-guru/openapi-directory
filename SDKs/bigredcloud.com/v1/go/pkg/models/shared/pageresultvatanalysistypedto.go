package shared

type PageResultVatAnalysisTypeDto struct {
	Count        *int64               `json:"Count"`
	Items        []VatAnalysisTypeDto `json:"Items"`
	NextPageLink *string              `json:"NextPageLink"`
}
