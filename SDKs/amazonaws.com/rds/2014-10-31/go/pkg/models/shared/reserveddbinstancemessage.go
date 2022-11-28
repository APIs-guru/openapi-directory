package shared

// ReservedDbInstanceMessage
//
//	Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.
type ReservedDbInstanceMessage struct {
	Marker              *string
	ReservedDbInstances []ReservedDbInstance
}
