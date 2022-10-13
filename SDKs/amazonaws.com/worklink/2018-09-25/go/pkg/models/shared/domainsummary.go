package shared

import (
	"time"
)

type DomainSummary struct {
	CreatedTime  time.Time        `json:"CreatedTime"`
	DisplayName  *string          `json:"DisplayName"`
	DomainName   string           `json:"DomainName"`
	DomainStatus DomainStatusEnum `json:"DomainStatus"`
}
