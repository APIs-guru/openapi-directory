package shared

import (
	"time"
)

type ProductViewDetail struct {
	CreatedTime        *time.Time          `json:"CreatedTime"`
	ProductArn         *string             `json:"ProductARN"`
	ProductViewSummary *ProductViewSummary `json:"ProductViewSummary"`
	Status             *StatusEnum         `json:"Status"`
}
