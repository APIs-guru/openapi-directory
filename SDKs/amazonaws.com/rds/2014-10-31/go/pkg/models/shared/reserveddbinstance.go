package shared

import (
	"time"
)

// ReservedDbInstance
//
//	This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.
type ReservedDbInstance struct {
	CurrencyCode                  *string
	DbInstanceClass               *string
	DbInstanceCount               *int64
	Duration                      *int64
	FixedPrice                    *float64
	LeaseID                       *string
	MultiAz                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []RecurringCharge
	ReservedDbInstanceArn         *string
	ReservedDbInstanceID          *string
	ReservedDbInstancesOfferingID *string
	StartTime                     *time.Time
	State                         *string
	UsagePrice                    *float64
}
