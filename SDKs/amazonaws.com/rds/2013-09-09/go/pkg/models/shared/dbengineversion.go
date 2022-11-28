package shared

type DbEngineVersion struct {
	DbEngineDescription        *string
	DbEngineVersionDescription *string
	DbParameterGroupFamily     *string
	DefaultCharacterSet        *CharacterSet
	Engine                     *string
	EngineVersion              *string
	SupportedCharacterSets     []CharacterSet
}
