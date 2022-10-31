package shared

type DescribeProductAsAdminInput struct {
	AcceptLanguage    *string `json:"AcceptLanguage,omitempty"`
	ID                *string `json:"Id,omitempty"`
	Name              *string `json:"Name,omitempty"`
	SourcePortfolioID *string `json:"SourcePortfolioId,omitempty"`
}
