package shared

type GetRelationalDatabaseBlueprintsResult struct {
	Blueprints    []RelationalDatabaseBlueprint `json:"blueprints,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
