package shared

type AddBoardAssetsResult struct {
	AssetsAdded    []BoardAsset `json:"assets_added,omitempty"`
	AssetsNotAdded []string     `json:"assets_not_added,omitempty"`
}
