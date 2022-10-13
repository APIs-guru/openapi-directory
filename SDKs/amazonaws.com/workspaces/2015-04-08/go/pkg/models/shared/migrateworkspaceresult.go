package shared

type MigrateWorkspaceResult struct {
	SourceWorkspaceID *string `json:"SourceWorkspaceId"`
	TargetWorkspaceID *string `json:"TargetWorkspaceId"`
}
