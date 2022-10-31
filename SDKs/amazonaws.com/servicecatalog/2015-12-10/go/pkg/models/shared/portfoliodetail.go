package shared

import (
	"time"
)

type PortfolioDetail struct {
	Arn          *string    `json:"ARN,omitempty"`
	CreatedTime  *time.Time `json:"CreatedTime,omitempty"`
	Description  *string    `json:"Description,omitempty"`
	DisplayName  *string    `json:"DisplayName,omitempty"`
	ID           *string    `json:"Id,omitempty"`
	ProviderName *string    `json:"ProviderName,omitempty"`
}
