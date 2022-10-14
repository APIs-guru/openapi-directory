package shared

type ListProvisionedProductPlansInput struct {
	AcceptLanguage     *string            `json:"AcceptLanguage,omitempty"`
	AccessLevelFilter  *AccessLevelFilter `json:"AccessLevelFilter,omitempty"`
	PageSize           *int64             `json:"PageSize,omitempty"`
	PageToken          *string            `json:"PageToken,omitempty"`
	ProvisionProductID *string            `json:"ProvisionProductId,omitempty"`
}
