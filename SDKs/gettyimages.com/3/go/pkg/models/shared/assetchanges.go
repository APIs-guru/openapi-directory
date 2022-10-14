package shared

type AssetChanges struct {
	ChangeSetID   *string              `json:"change_set_id,omitempty"`
	ChangedAssets []ChangedAssetDetail `json:"changed_assets,omitempty"`
}
