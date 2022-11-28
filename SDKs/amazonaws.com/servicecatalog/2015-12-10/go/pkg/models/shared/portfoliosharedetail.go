package shared

// PortfolioShareDetail
// Information about the portfolio share.
type PortfolioShareDetail struct {
	Accepted        *bool                           `json:"Accepted,omitempty"`
	PrincipalID     *string                         `json:"PrincipalId,omitempty"`
	ShareTagOptions *bool                           `json:"ShareTagOptions,omitempty"`
	Type            *DescribePortfolioShareTypeEnum `json:"Type,omitempty"`
}
