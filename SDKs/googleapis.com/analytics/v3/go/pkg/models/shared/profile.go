package shared

import (
	"time"
)

type ProfileChildLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type ProfileParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type ProfilePermissions struct {
	Effective []string `json:"effective"`
}

type Profile struct {
	AccountID                         *string             `json:"accountId"`
	BotFilteringEnabled               *bool               `json:"botFilteringEnabled"`
	ChildLink                         *ProfileChildLink   `json:"childLink"`
	Created                           *time.Time          `json:"created"`
	Currency                          *string             `json:"currency"`
	DefaultPage                       *string             `json:"defaultPage"`
	ECommerceTracking                 *bool               `json:"eCommerceTracking"`
	EnhancedECommerceTracking         *bool               `json:"enhancedECommerceTracking"`
	ExcludeQueryParameters            *string             `json:"excludeQueryParameters"`
	ID                                *string             `json:"id"`
	InternalWebPropertyID             *string             `json:"internalWebPropertyId"`
	Kind                              *string             `json:"kind"`
	Name                              *string             `json:"name"`
	ParentLink                        *ProfileParentLink  `json:"parentLink"`
	Permissions                       *ProfilePermissions `json:"permissions"`
	SelfLink                          *string             `json:"selfLink"`
	SiteSearchCategoryParameters      *string             `json:"siteSearchCategoryParameters"`
	SiteSearchQueryParameters         *string             `json:"siteSearchQueryParameters"`
	Starred                           *bool               `json:"starred"`
	StripSiteSearchCategoryParameters *bool               `json:"stripSiteSearchCategoryParameters"`
	StripSiteSearchQueryParameters    *bool               `json:"stripSiteSearchQueryParameters"`
	Timezone                          *string             `json:"timezone"`
	Type                              *string             `json:"type"`
	Updated                           *time.Time          `json:"updated"`
	WebPropertyID                     *string             `json:"webPropertyId"`
	WebsiteURL                        *string             `json:"websiteUrl"`
}
