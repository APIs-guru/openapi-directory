package shared

// DbParameterGroup
// <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
type DbParameterGroup struct {
	DbParameterGroupArn    *string
	DbParameterGroupFamily *string
	DbParameterGroupName   *string
	Description            *string
}
