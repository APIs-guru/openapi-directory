package shared

import (
	"time"
)

// ProductViewDetail
// Information about a product view.
type ProductViewDetail struct {
	CreatedTime        *time.Time          `json:"CreatedTime,omitempty"`
	ProductArn         *string             `json:"ProductARN,omitempty"`
	ProductViewSummary *ProductViewSummary `json:"ProductViewSummary,omitempty"`
	Status             *StatusEnum         `json:"Status,omitempty"`
}
