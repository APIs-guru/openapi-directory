package shared

type GetRelationalDatabaseBlueprintsResult struct {
	Blueprints    []RelationalDatabaseBlueprint `json:"blueprints"`
	NextPageToken *string                       `json:"nextPageToken"`
}
