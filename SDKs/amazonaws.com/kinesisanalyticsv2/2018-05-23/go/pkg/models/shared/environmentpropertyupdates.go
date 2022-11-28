package shared

// EnvironmentPropertyUpdates
// Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.
type EnvironmentPropertyUpdates struct {
	PropertyGroups []PropertyGroup `json:"PropertyGroups"`
}
