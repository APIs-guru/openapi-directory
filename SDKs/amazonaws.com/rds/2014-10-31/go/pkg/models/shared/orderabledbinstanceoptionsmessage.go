package shared

// OrderableDbInstanceOptionsMessage
//
//	Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.
type OrderableDbInstanceOptionsMessage struct {
	Marker                     *string
	OrderableDbInstanceOptions []OrderableDbInstanceOption
}
