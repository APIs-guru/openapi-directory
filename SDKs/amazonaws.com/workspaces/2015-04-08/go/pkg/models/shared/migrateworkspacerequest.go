package shared

type MigrateWorkspaceRequest struct {
	BundleID          string `json:"BundleId"`
	SourceWorkspaceID string `json:"SourceWorkspaceId"`
}
