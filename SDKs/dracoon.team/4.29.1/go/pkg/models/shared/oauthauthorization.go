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
	CreatedAt              *time.Time                              `json:"createdAt"`
	ExpiresAt              *time.Time                              `json:"expiresAt"`
	ID                     *int64                                  `json:"id"`
	IsCurrentAuthorization *bool                                   `json:"isCurrentAuthorization"`
	IsStandard             *bool                                   `json:"isStandard"`
	UsedAt                 *time.Time                              `json:"usedAt"`
	UserAgentCategory      OAuthAuthorizationUserAgentCategoryEnum `json:"userAgentCategory"`
	UserAgentInfo          *string                                 `json:"userAgentInfo"`
	UserAgentOs            *string                                 `json:"userAgentOs"`
	UserAgentType          *string                                 `json:"userAgentType"`
}
