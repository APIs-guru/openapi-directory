package shared

// DbParameterGroup
// <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
type DbParameterGroup struct {
	DbParameterGroupArn    *string
	DbParameterGroupFamily *string
	DbParameterGroupName   *string
	Description            *string
}
