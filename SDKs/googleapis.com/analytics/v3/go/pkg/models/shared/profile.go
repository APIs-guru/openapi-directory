package shared

import (
	"time"
)

type ProfileChildLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ProfileParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ProfilePermissions struct {
	Effective []string `json:"effective,omitempty"`
}

type Profile struct {
	AccountID                         *string             `json:"accountId,omitempty"`
	BotFilteringEnabled               *bool               `json:"botFilteringEnabled,omitempty"`
	ChildLink                         *ProfileChildLink   `json:"childLink,omitempty"`
	Created                           *time.Time          `json:"created,omitempty"`
	Currency                          *string             `json:"currency,omitempty"`
	DefaultPage                       *string             `json:"defaultPage,omitempty"`
	ECommerceTracking                 *bool               `json:"eCommerceTracking,omitempty"`
	EnhancedECommerceTracking         *bool               `json:"enhancedECommerceTracking,omitempty"`
	ExcludeQueryParameters            *string             `json:"excludeQueryParameters,omitempty"`
	ID                                *string             `json:"id,omitempty"`
	InternalWebPropertyID             *string             `json:"internalWebPropertyId,omitempty"`
	Kind                              *string             `json:"kind,omitempty"`
	Name                              *string             `json:"name,omitempty"`
	ParentLink                        *ProfileParentLink  `json:"parentLink,omitempty"`
	Permissions                       *ProfilePermissions `json:"permissions,omitempty"`
	SelfLink                          *string             `json:"selfLink,omitempty"`
	SiteSearchCategoryParameters      *string             `json:"siteSearchCategoryParameters,omitempty"`
	SiteSearchQueryParameters         *string             `json:"siteSearchQueryParameters,omitempty"`
	Starred                           *bool               `json:"starred,omitempty"`
	StripSiteSearchCategoryParameters *bool               `json:"stripSiteSearchCategoryParameters,omitempty"`
	StripSiteSearchQueryParameters    *bool               `json:"stripSiteSearchQueryParameters,omitempty"`
	Timezone                          *string             `json:"timezone,omitempty"`
	Type                              *string             `json:"type,omitempty"`
	Updated                           *time.Time          `json:"updated,omitempty"`
	WebPropertyID                     *string             `json:"webPropertyId,omitempty"`
	WebsiteURL                        *string             `json:"websiteUrl,omitempty"`
}
