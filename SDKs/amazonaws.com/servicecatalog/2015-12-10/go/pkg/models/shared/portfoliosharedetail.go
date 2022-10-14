package shared

type PortfolioShareDetail struct {
	Accepted        *bool                           `json:"Accepted,omitempty"`
	PrincipalID     *string                         `json:"PrincipalId,omitempty"`
	ShareTagOptions *bool                           `json:"ShareTagOptions,omitempty"`
	Type            *DescribePortfolioShareTypeEnum `json:"Type,omitempty"`
}
