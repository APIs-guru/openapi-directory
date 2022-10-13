package shared

import (
	"time"
)

type ProductDiscountAPIModel struct {
	DiscountAmount     *float64   `json:"DiscountAmount"`
	DiscountPercentage *float64   `json:"DiscountPercentage"`
	ID                 *int32     `json:"Id"`
	Name               *string    `json:"Name"`
	ValidFrom          *time.Time `json:"ValidFrom"`
	ValidTo            *time.Time `json:"ValidTo"`
}
