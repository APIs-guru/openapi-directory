package shared

type DbEngineVersionMessage struct {
	DbEngineVersions []DbEngineVersion
	Marker           *string
}
