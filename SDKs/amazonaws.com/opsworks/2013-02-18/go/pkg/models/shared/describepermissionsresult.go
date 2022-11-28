package shared

// DescribePermissionsResult
// Contains the response to a <code>DescribePermissions</code> request.
type DescribePermissionsResult struct {
	Permissions []Permission `json:"Permissions,omitempty"`
}
