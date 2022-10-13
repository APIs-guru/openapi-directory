package shared

type PortfolioMembershipResponse struct {
	Gid          *string           `json:"gid"`
	Portfolio    *PortfolioCompact `json:"portfolio"`
	ResourceType *string           `json:"resource_type"`
	User         *UserCompact      `json:"user"`
}
