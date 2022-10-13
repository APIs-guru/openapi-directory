package shared

import (
	"time"
)

type WebsiteAuthorizationProviderSummary struct {
	AuthorizationProviderID   *string                       `json:"AuthorizationProviderId"`
	AuthorizationProviderType AuthorizationProviderTypeEnum `json:"AuthorizationProviderType"`
	CreatedTime               *time.Time                    `json:"CreatedTime"`
	DomainName                *string                       `json:"DomainName"`
}
