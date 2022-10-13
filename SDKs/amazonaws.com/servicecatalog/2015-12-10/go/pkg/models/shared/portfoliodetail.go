package shared

import (
	"time"
)

type PortfolioDetail struct {
	Arn          *string    `json:"ARN"`
	CreatedTime  *time.Time `json:"CreatedTime"`
	Description  *string    `json:"Description"`
	DisplayName  *string    `json:"DisplayName"`
	ID           *string    `json:"Id"`
	ProviderName *string    `json:"ProviderName"`
}
