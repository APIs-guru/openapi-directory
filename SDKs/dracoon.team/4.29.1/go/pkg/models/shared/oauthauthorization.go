package shared

import (
	"time"
)

type OAuthAuthorizationUserAgentCategoryEnum string

const (
	OAuthAuthorizationUserAgentCategoryEnumBrowser OAuthAuthorizationUserAgentCategoryEnum = "browser"
	OAuthAuthorizationUserAgentCategoryEnumNative  OAuthAuthorizationUserAgentCategoryEnum = "native"
	OAuthAuthorizationUserAgentCategoryEnumUnknown OAuthAuthorizationUserAgentCategoryEnum = "unknown"
)

type OAuthAuthorization struct {
	ClientID               string                                  `json:"clientId"`
	ClientName             string                                  `json:"clientName"`
	CreatedAt              *time.Time                              `json:"createdAt,omitempty"`
	ExpiresAt              *time.Time                              `json:"expiresAt,omitempty"`
	ID                     *int64                                  `json:"id,omitempty"`
	IsCurrentAuthorization *bool                                   `json:"isCurrentAuthorization,omitempty"`
	IsStandard             *bool                                   `json:"isStandard,omitempty"`
	UsedAt                 *time.Time                              `json:"usedAt,omitempty"`
	UserAgentCategory      OAuthAuthorizationUserAgentCategoryEnum `json:"userAgentCategory"`
	UserAgentInfo          *string                                 `json:"userAgentInfo,omitempty"`
	UserAgentOs            *string                                 `json:"userAgentOs,omitempty"`
	UserAgentType          *string                                 `json:"userAgentType,omitempty"`
}
