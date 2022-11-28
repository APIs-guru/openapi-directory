package shared

// IPRange
//
//	This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.
type IPRange struct {
	Cidrip *string
	Status *string
}
