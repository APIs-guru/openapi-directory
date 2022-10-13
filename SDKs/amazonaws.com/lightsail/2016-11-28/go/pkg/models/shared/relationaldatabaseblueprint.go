package shared

type RelationalDatabaseBlueprint struct {
	BlueprintID              *string                       `json:"blueprintId"`
	Engine                   *RelationalDatabaseEngineEnum `json:"engine"`
	EngineDescription        *string                       `json:"engineDescription"`
	EngineVersion            *string                       `json:"engineVersion"`
	EngineVersionDescription *string                       `json:"engineVersionDescription"`
	IsEngineDefault          *bool                         `json:"isEngineDefault"`
}
