package shared

type ScanProvisionedProductsInput struct {
	AcceptLanguage    *string            `json:"AcceptLanguage"`
	AccessLevelFilter *AccessLevelFilter `json:"AccessLevelFilter"`
	PageSize          *int64             `json:"PageSize"`
	PageToken         *string            `json:"PageToken"`
}
