package shared

// OrderableClusterOptionsMessage
// Contains the output from the <a>DescribeOrderableClusterOptions</a> action.
type OrderableClusterOptionsMessage struct {
	Marker                  *string
	OrderableClusterOptions []OrderableClusterOption
}
