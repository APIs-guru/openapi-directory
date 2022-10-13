package shared

import (
	"time"
)

type WebpropertyChildLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type WebpropertyParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type WebpropertyPermissions struct {
	Effective []string `json:"effective"`
}

type Webproperty struct {
	AccountID                       *string                 `json:"accountId"`
	ChildLink                       *WebpropertyChildLink   `json:"childLink"`
	Created                         *time.Time              `json:"created"`
	DataRetentionResetOnNewActivity *bool                   `json:"dataRetentionResetOnNewActivity"`
	DataRetentionTTL                *string                 `json:"dataRetentionTtl"`
	DefaultProfileID                *string                 `json:"defaultProfileId"`
	ID                              *string                 `json:"id"`
	IndustryVertical                *string                 `json:"industryVertical"`
	InternalWebPropertyID           *string                 `json:"internalWebPropertyId"`
	Kind                            *string                 `json:"kind"`
	Level                           *string                 `json:"level"`
	Name                            *string                 `json:"name"`
	ParentLink                      *WebpropertyParentLink  `json:"parentLink"`
	Permissions                     *WebpropertyPermissions `json:"permissions"`
	ProfileCount                    *int32                  `json:"profileCount"`
	SelfLink                        *string                 `json:"selfLink"`
	Starred                         *bool                   `json:"starred"`
	Updated                         *time.Time              `json:"updated"`
	WebsiteURL                      *string                 `json:"websiteUrl"`
}
