package shared




type PortfolioRequestColorEnum string

const (
    PortfolioRequestColorEnumDarkPink PortfolioRequestColorEnum = "dark-pink"
PortfolioRequestColorEnumDarkGreen PortfolioRequestColorEnum = "dark-green"
PortfolioRequestColorEnumDarkBlue PortfolioRequestColorEnum = "dark-blue"
PortfolioRequestColorEnumDarkRed PortfolioRequestColorEnum = "dark-red"
PortfolioRequestColorEnumDarkTeal PortfolioRequestColorEnum = "dark-teal"
PortfolioRequestColorEnumDarkBrown PortfolioRequestColorEnum = "dark-brown"
PortfolioRequestColorEnumDarkOrange PortfolioRequestColorEnum = "dark-orange"
PortfolioRequestColorEnumDarkPurple PortfolioRequestColorEnum = "dark-purple"
PortfolioRequestColorEnumDarkWarmGray PortfolioRequestColorEnum = "dark-warm-gray"
PortfolioRequestColorEnumLightPink PortfolioRequestColorEnum = "light-pink"
PortfolioRequestColorEnumLightGreen PortfolioRequestColorEnum = "light-green"
PortfolioRequestColorEnumLightBlue PortfolioRequestColorEnum = "light-blue"
PortfolioRequestColorEnumLightRed PortfolioRequestColorEnum = "light-red"
PortfolioRequestColorEnumLightTeal PortfolioRequestColorEnum = "light-teal"
PortfolioRequestColorEnumLightBrown PortfolioRequestColorEnum = "light-brown"
PortfolioRequestColorEnumLightOrange PortfolioRequestColorEnum = "light-orange"
PortfolioRequestColorEnumLightPurple PortfolioRequestColorEnum = "light-purple"
PortfolioRequestColorEnumLightWarmGray PortfolioRequestColorEnum = "light-warm-gray"
)


type PortfolioRequest struct {
    Color *PortfolioRequestColorEnum `json:"color,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Members []string `json:"members,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    Workspace *string `json:"workspace,omitempty"`
    
}

