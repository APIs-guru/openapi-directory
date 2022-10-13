package shared

type GetBlueprintsResult struct {
	Blueprints    []Blueprint `json:"blueprints"`
	NextPageToken *string     `json:"nextPageToken"`
}
