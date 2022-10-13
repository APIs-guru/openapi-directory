package shared

type GetRelationalDatabaseBundlesResult struct {
	Bundles       []RelationalDatabaseBundle `json:"bundles"`
	NextPageToken *string                    `json:"nextPageToken"`
}
