package shared

import (
"time")


type PortfolioResponseColorEnum string

const (
    PortfolioResponseColorEnumDarkPink PortfolioResponseColorEnum = "dark-pink"
PortfolioResponseColorEnumDarkGreen PortfolioResponseColorEnum = "dark-green"
PortfolioResponseColorEnumDarkBlue PortfolioResponseColorEnum = "dark-blue"
PortfolioResponseColorEnumDarkRed PortfolioResponseColorEnum = "dark-red"
PortfolioResponseColorEnumDarkTeal PortfolioResponseColorEnum = "dark-teal"
PortfolioResponseColorEnumDarkBrown PortfolioResponseColorEnum = "dark-brown"
PortfolioResponseColorEnumDarkOrange PortfolioResponseColorEnum = "dark-orange"
PortfolioResponseColorEnumDarkPurple PortfolioResponseColorEnum = "dark-purple"
PortfolioResponseColorEnumDarkWarmGray PortfolioResponseColorEnum = "dark-warm-gray"
PortfolioResponseColorEnumLightPink PortfolioResponseColorEnum = "light-pink"
PortfolioResponseColorEnumLightGreen PortfolioResponseColorEnum = "light-green"
PortfolioResponseColorEnumLightBlue PortfolioResponseColorEnum = "light-blue"
PortfolioResponseColorEnumLightRed PortfolioResponseColorEnum = "light-red"
PortfolioResponseColorEnumLightTeal PortfolioResponseColorEnum = "light-teal"
PortfolioResponseColorEnumLightBrown PortfolioResponseColorEnum = "light-brown"
PortfolioResponseColorEnumLightOrange PortfolioResponseColorEnum = "light-orange"
PortfolioResponseColorEnumLightPurple PortfolioResponseColorEnum = "light-purple"
PortfolioResponseColorEnumLightWarmGray PortfolioResponseColorEnum = "light-warm-gray"
)


type PortfolioResponseWorkspace struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type PortfolioResponse struct {
    Color *PortfolioResponseColorEnum `json:"color,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *UserCompact `json:"created_by,omitempty"`
    CustomFieldSettings []CustomFieldSettingResponse `json:"custom_field_settings,omitempty"`
    DueOn *time.Time `json:"due_on,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Members []UserCompact `json:"members,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *UserCompact `json:"owner,omitempty"`
    PermalinkURL *string `json:"permalink_url,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *time.Time `json:"start_on,omitempty"`
    Workspace *PortfolioResponseWorkspace `json:"workspace,omitempty"`
    
}

