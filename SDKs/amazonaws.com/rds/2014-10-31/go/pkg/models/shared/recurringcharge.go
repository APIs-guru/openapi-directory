package shared

// RecurringCharge
//
//	This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions.
type RecurringCharge struct {
	RecurringChargeAmount    *float64
	RecurringChargeFrequency *string
}
