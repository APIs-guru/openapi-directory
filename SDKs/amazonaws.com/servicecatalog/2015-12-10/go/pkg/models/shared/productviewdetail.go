package shared

import (
	"time"
)

type ProductViewDetail struct {
	CreatedTime        *time.Time          `json:"CreatedTime,omitempty"`
	ProductArn         *string             `json:"ProductARN,omitempty"`
	ProductViewSummary *ProductViewSummary `json:"ProductViewSummary,omitempty"`
	Status             *StatusEnum         `json:"Status,omitempty"`
}
