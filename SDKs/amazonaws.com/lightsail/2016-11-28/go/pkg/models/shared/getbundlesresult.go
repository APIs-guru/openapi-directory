package shared

type GetBundlesResult struct {
	Bundles       []Bundle `json:"bundles,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
