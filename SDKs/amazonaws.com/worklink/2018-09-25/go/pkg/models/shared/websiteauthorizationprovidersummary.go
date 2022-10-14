package shared

import (
	"time"
)

type WebsiteAuthorizationProviderSummary struct {
	AuthorizationProviderID   *string                       `json:"AuthorizationProviderId,omitempty"`
	AuthorizationProviderType AuthorizationProviderTypeEnum `json:"AuthorizationProviderType"`
	CreatedTime               *time.Time                    `json:"CreatedTime,omitempty"`
	DomainName                *string                       `json:"DomainName,omitempty"`
}
