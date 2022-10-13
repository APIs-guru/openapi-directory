package shared

type PortfolioRequestColorEnum string

const (
	PortfolioRequestColorEnumDarkPink      PortfolioRequestColorEnum = "dark-pink"
	PortfolioRequestColorEnumDarkGreen     PortfolioRequestColorEnum = "dark-green"
	PortfolioRequestColorEnumDarkBlue      PortfolioRequestColorEnum = "dark-blue"
	PortfolioRequestColorEnumDarkRed       PortfolioRequestColorEnum = "dark-red"
	PortfolioRequestColorEnumDarkTeal      PortfolioRequestColorEnum = "dark-teal"
	PortfolioRequestColorEnumDarkBrown     PortfolioRequestColorEnum = "dark-brown"
	PortfolioRequestColorEnumDarkOrange    PortfolioRequestColorEnum = "dark-orange"
	PortfolioRequestColorEnumDarkPurple    PortfolioRequestColorEnum = "dark-purple"
	PortfolioRequestColorEnumDarkWarmGray  PortfolioRequestColorEnum = "dark-warm-gray"
	PortfolioRequestColorEnumLightPink     PortfolioRequestColorEnum = "light-pink"
	PortfolioRequestColorEnumLightGreen    PortfolioRequestColorEnum = "light-green"
	PortfolioRequestColorEnumLightBlue     PortfolioRequestColorEnum = "light-blue"
	PortfolioRequestColorEnumLightRed      PortfolioRequestColorEnum = "light-red"
	PortfolioRequestColorEnumLightTeal     PortfolioRequestColorEnum = "light-teal"
	PortfolioRequestColorEnumLightBrown    PortfolioRequestColorEnum = "light-brown"
	PortfolioRequestColorEnumLightOrange   PortfolioRequestColorEnum = "light-orange"
	PortfolioRequestColorEnumLightPurple   PortfolioRequestColorEnum = "light-purple"
	PortfolioRequestColorEnumLightWarmGray PortfolioRequestColorEnum = "light-warm-gray"
)

type PortfolioRequest struct {
	Color        *PortfolioRequestColorEnum `json:"color"`
	Gid          *string                    `json:"gid"`
	Members      []string                   `json:"members"`
	Name         *string                    `json:"name"`
	ResourceType *string                    `json:"resource_type"`
	Workspace    *string                    `json:"workspace"`
}
