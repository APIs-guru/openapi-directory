package shared

type GetRelationalDatabaseBundlesResult struct {
	Bundles       []RelationalDatabaseBundle `json:"bundles,omitempty"`
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
}
