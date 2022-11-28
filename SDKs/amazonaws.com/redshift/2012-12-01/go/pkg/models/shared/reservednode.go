package shared

import (
	"time"
)

// ReservedNode
// Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.
type ReservedNode struct {
	CurrencyCode             *string
	Duration                 *int64
	FixedPrice               *float64
	NodeCount                *int64
	NodeType                 *string
	OfferingType             *string
	RecurringCharges         []RecurringCharge
	ReservedNodeID           *string
	ReservedNodeOfferingID   *string
	ReservedNodeOfferingType *ReservedNodeOfferingTypeEnum
	StartTime                *time.Time
	State                    *string
	UsagePrice               *float64
}
