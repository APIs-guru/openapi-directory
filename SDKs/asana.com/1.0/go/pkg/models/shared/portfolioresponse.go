package shared

import (
	"time"
)

type PortfolioResponseColorEnum string

const (
	PortfolioResponseColorEnumDarkPink      PortfolioResponseColorEnum = "dark-pink"
	PortfolioResponseColorEnumDarkGreen     PortfolioResponseColorEnum = "dark-green"
	PortfolioResponseColorEnumDarkBlue      PortfolioResponseColorEnum = "dark-blue"
	PortfolioResponseColorEnumDarkRed       PortfolioResponseColorEnum = "dark-red"
	PortfolioResponseColorEnumDarkTeal      PortfolioResponseColorEnum = "dark-teal"
	PortfolioResponseColorEnumDarkBrown     PortfolioResponseColorEnum = "dark-brown"
	PortfolioResponseColorEnumDarkOrange    PortfolioResponseColorEnum = "dark-orange"
	PortfolioResponseColorEnumDarkPurple    PortfolioResponseColorEnum = "dark-purple"
	PortfolioResponseColorEnumDarkWarmGray  PortfolioResponseColorEnum = "dark-warm-gray"
	PortfolioResponseColorEnumLightPink     PortfolioResponseColorEnum = "light-pink"
	PortfolioResponseColorEnumLightGreen    PortfolioResponseColorEnum = "light-green"
	PortfolioResponseColorEnumLightBlue     PortfolioResponseColorEnum = "light-blue"
	PortfolioResponseColorEnumLightRed      PortfolioResponseColorEnum = "light-red"
	PortfolioResponseColorEnumLightTeal     PortfolioResponseColorEnum = "light-teal"
	PortfolioResponseColorEnumLightBrown    PortfolioResponseColorEnum = "light-brown"
	PortfolioResponseColorEnumLightOrange   PortfolioResponseColorEnum = "light-orange"
	PortfolioResponseColorEnumLightPurple   PortfolioResponseColorEnum = "light-purple"
	PortfolioResponseColorEnumLightWarmGray PortfolioResponseColorEnum = "light-warm-gray"
)

type PortfolioResponseWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type PortfolioResponse struct {
	Color               *PortfolioResponseColorEnum  `json:"color"`
	CreatedAt           *time.Time                   `json:"created_at"`
	CreatedBy           *UserCompact                 `json:"created_by"`
	CustomFieldSettings []CustomFieldSettingResponse `json:"custom_field_settings"`
	DueOn               *time.Time                   `json:"due_on"`
	Gid                 *string                      `json:"gid"`
	Members             []UserCompact                `json:"members"`
	Name                *string                      `json:"name"`
	Owner               *UserCompact                 `json:"owner"`
	PermalinkURL        *string                      `json:"permalink_url"`
	ResourceType        *string                      `json:"resource_type"`
	StartOn             *time.Time                   `json:"start_on"`
	Workspace           *PortfolioResponseWorkspace  `json:"workspace"`
}
