package shared

import (
"time")

type DescribeReturnShippingLabelResult struct {
    ExpirationDate *time.Time `json:"ExpirationDate,omitempty"`
    Status *ShippingLabelStatusEnum `json:"Status,omitempty"`
    
}

