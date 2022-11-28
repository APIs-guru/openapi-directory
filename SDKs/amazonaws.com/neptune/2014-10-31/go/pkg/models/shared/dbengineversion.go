package shared

// DbEngineVersion
//
//	This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
type DbEngineVersion struct {
	DbEngineDescription                *string
	DbEngineVersionDescription         *string
	DbParameterGroupFamily             *string
	DefaultCharacterSet                *CharacterSet
	Engine                             *string
	EngineVersion                      *string
	ExportableLogTypes                 []string
	SupportedCharacterSets             []CharacterSet
	SupportedTimezones                 []Timezone
	SupportsLogExportsToCloudwatchLogs *bool
	SupportsReadReplica                *bool
	ValidUpgradeTarget                 []UpgradeTarget
}
