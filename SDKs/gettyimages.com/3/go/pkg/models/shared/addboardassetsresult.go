package shared

type AddBoardAssetsResult struct {
	AssetsAdded    []BoardAsset `json:"assets_added"`
	AssetsNotAdded []string     `json:"assets_not_added"`
}
