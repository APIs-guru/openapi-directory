package shared

type AssetChanges struct {
	ChangeSetID   *string              `json:"change_set_id"`
	ChangedAssets []ChangedAssetDetail `json:"changed_assets"`
}
