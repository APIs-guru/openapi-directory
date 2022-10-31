package shared

type DescribeCopyProductStatusInput struct {
	AcceptLanguage   *string `json:"AcceptLanguage,omitempty"`
	CopyProductToken string  `json:"CopyProductToken"`
}
