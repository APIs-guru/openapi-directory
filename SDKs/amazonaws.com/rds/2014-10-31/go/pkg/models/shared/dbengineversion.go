package shared

// DbEngineVersion
//
//	This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
type DbEngineVersion struct {
	DbEngineDescription                *string
	DbEngineVersionDescription         *string
	DbParameterGroupFamily             *string
	DefaultCharacterSet                *CharacterSet
	Engine                             *string
	EngineVersion                      *string
	ExportableLogTypes                 []string
	Status                             *string
	SupportedCharacterSets             []CharacterSet
	SupportedEngineModes               []string
	SupportedFeatureNames              []string
	SupportedNcharCharacterSets        []CharacterSet
	SupportedTimezones                 []Timezone
	SupportsGlobalDatabases            *bool
	SupportsLogExportsToCloudwatchLogs *bool
	SupportsParallelQuery              *bool
	SupportsReadReplica                *bool
	ValidUpgradeTarget                 []UpgradeTarget
}
