package shared

import (
	"time"
)

type ReservedDbInstance struct {
	CurrencyCode                  *string
	DbInstanceClass               *string
	DbInstanceCount               *int64
	Duration                      *int64
	FixedPrice                    *float64
	MultiAz                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []RecurringCharge
	ReservedDbInstanceID          *string
	ReservedDbInstancesOfferingID *string
	StartTime                     *time.Time
	State                         *string
	UsagePrice                    *float64
}
