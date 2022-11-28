package shared

import (
	"time"
)

// WebpropertyChildLink
// Child link for this web property. Points to the list of views (profiles) for this web property.
type WebpropertyChildLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

// WebpropertyParentLink
// Parent link for this web property. Points to the account to which this web property belongs.
type WebpropertyParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

// WebpropertyPermissions
// Permissions the user has for this web property.
type WebpropertyPermissions struct {
	Effective []string `json:"effective,omitempty"`
}

// Webproperty
// JSON template for an Analytics web property.
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

// WebpropertyInput
// JSON template for an Analytics web property.
type WebpropertyInput struct {
	AccountID                       *string                `json:"accountId,omitempty"`
	ChildLink                       *WebpropertyChildLink  `json:"childLink,omitempty"`
	DataRetentionResetOnNewActivity *bool                  `json:"dataRetentionResetOnNewActivity,omitempty"`
	DataRetentionTTL                *string                `json:"dataRetentionTtl,omitempty"`
	DefaultProfileID                *string                `json:"defaultProfileId,omitempty"`
	ID                              *string                `json:"id,omitempty"`
	IndustryVertical                *string                `json:"industryVertical,omitempty"`
	Name                            *string                `json:"name,omitempty"`
	ParentLink                      *WebpropertyParentLink `json:"parentLink,omitempty"`
	Starred                         *bool                  `json:"starred,omitempty"`
	WebsiteURL                      *string                `json:"websiteUrl,omitempty"`
}
