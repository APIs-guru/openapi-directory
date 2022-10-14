package shared

type RelationalDatabaseBlueprint struct {
	BlueprintID              *string                       `json:"blueprintId,omitempty"`
	Engine                   *RelationalDatabaseEngineEnum `json:"engine,omitempty"`
	EngineDescription        *string                       `json:"engineDescription,omitempty"`
	EngineVersion            *string                       `json:"engineVersion,omitempty"`
	EngineVersionDescription *string                       `json:"engineVersionDescription,omitempty"`
	IsEngineDefault          *bool                         `json:"isEngineDefault,omitempty"`
}
