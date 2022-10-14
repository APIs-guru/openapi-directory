package shared

import (
	"time"
)

type DelegatedService struct {
	DelegationEnabledDate *time.Time `json:"DelegationEnabledDate,omitempty"`
	ServicePrincipal      *string    `json:"ServicePrincipal,omitempty"`
}
