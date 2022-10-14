package shared

import (
	"time"
)

type WebpropertyChildLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type WebpropertyParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type WebpropertyPermissions struct {
	Effective []string `json:"effective,omitempty"`
}

type Webproperty struct {
	AccountID                       *string                 `json:"accountId,omitempty"`
	ChildLink                       *WebpropertyChildLink   `json:"childLink,omitempty"`
	Created                         *time.Time              `json:"created,omitempty"`
	DataRetentionResetOnNewActivity *bool                   `json:"dataRetentionResetOnNewActivity,omitempty"`
	DataRetentionTTL                *string                 `json:"dataRetentionTtl,omitempty"`
	DefaultProfileID                *string                 `json:"defaultProfileId,omitempty"`
	ID                              *string                 `json:"id,omitempty"`
	IndustryVertical                *string                 `json:"industryVertical,omitempty"`
	InternalWebPropertyID           *string                 `json:"internalWebPropertyId,omitempty"`
	Kind                            *string                 `json:"kind,omitempty"`
	Level                           *string                 `json:"level,omitempty"`
	Name                            *string                 `json:"name,omitempty"`
	ParentLink                      *WebpropertyParentLink  `json:"parentLink,omitempty"`
	Permissions                     *WebpropertyPermissions `json:"permissions,omitempty"`
	ProfileCount                    *int32                  `json:"profileCount,omitempty"`
	SelfLink                        *string                 `json:"selfLink,omitempty"`
	Starred                         *bool                   `json:"starred,omitempty"`
	Updated                         *time.Time              `json:"updated,omitempty"`
	WebsiteURL                      *string                 `json:"websiteUrl,omitempty"`
}
