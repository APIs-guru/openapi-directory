package shared

type GetBundlesResult struct {
	Bundles       []Bundle `json:"bundles"`
	NextPageToken *string  `json:"nextPageToken"`
}
