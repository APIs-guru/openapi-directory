package shared

import (
	"time"
)

// DelegatedService
// Contains information about the AWS service for which the account is a delegated administrator.
type DelegatedService struct {
	DelegationEnabledDate *time.Time `json:"DelegationEnabledDate,omitempty"`
	ServicePrincipal      *string    `json:"ServicePrincipal,omitempty"`
}
