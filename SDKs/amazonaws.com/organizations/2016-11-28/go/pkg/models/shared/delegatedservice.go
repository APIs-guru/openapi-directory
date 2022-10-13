package shared

import (
	"time"
)

type DelegatedService struct {
	DelegationEnabledDate *time.Time `json:"DelegationEnabledDate"`
	ServicePrincipal      *string    `json:"ServicePrincipal"`
}
