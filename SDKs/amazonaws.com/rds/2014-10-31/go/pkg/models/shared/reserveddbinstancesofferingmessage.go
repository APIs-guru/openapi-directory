package shared

// ReservedDbInstancesOfferingMessage
//
//	Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.
type ReservedDbInstancesOfferingMessage struct {
	Marker                       *string
	ReservedDbInstancesOfferings []ReservedDbInstancesOffering
}
