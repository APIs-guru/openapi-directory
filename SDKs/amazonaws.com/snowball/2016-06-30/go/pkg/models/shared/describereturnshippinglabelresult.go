package shared

import (
	"time"
)

type DescribeReturnShippingLabelResult struct {
	ExpirationDate *time.Time               `json:"ExpirationDate"`
	Status         *ShippingLabelStatusEnum `json:"Status"`
}
