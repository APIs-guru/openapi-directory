package shared

type ListResourceSharePermissionsResponse struct {
	NextToken   *string                          `json:"nextToken"`
	Permissions []ResourceSharePermissionSummary `json:"permissions"`
}
