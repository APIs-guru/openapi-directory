package shared

type PortfolioShareDetail struct {
	Accepted        *bool                           `json:"Accepted"`
	PrincipalID     *string                         `json:"PrincipalId"`
	ShareTagOptions *bool                           `json:"ShareTagOptions"`
	Type            *DescribePortfolioShareTypeEnum `json:"Type"`
}
