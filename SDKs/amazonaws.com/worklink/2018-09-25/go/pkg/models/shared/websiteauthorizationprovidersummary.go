package shared

import (
	"time"
)

// WebsiteAuthorizationProviderSummary
// The summary of the website authorization provider.
type WebsiteAuthorizationProviderSummary struct {
	AuthorizationProviderID   *string                       `json:"AuthorizationProviderId,omitempty"`
	AuthorizationProviderType AuthorizationProviderTypeEnum `json:"AuthorizationProviderType"`
	CreatedTime               *time.Time                    `json:"CreatedTime,omitempty"`
	DomainName                *string                       `json:"DomainName,omitempty"`
}
