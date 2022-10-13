package shared

type ListPermissionsResponse struct {
	NextToken   *string                          `json:"nextToken"`
	Permissions []ResourceSharePermissionSummary `json:"permissions"`
}
