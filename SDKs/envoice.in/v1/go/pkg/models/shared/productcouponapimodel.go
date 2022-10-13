package shared

import (
	"time"
)

type ProductCouponAPIModel struct {
	Code               *string    `json:"Code"`
	DiscountAmount     *float64   `json:"DiscountAmount"`
	DiscountPercentage *float64   `json:"DiscountPercentage"`
	ID                 *int32     `json:"Id"`
	ValidUntil         *time.Time `json:"ValidUntil"`
}
