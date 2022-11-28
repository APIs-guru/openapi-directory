package shared

// MaintenanceWindowFilter
// <p>Filter used in the request. Supported filter keys depend on the API operation that includes the filter. API operations that use <code>MaintenanceWindowFilter&gt;</code> include the following:</p> <ul> <li> <p> <a>DescribeMaintenanceWindowExecutions</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTaskInvocations</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTasks</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindows</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTargets</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTasks</a> </p> </li> </ul>
type MaintenanceWindowFilter struct {
	Key    *string  `json:"Key,omitempty"`
	Values []string `json:"Values,omitempty"`
}
