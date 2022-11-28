package shared

// EnvironmentProperties
// Describes execution properties for a Flink-based Kinesis Data Analytics application.
type EnvironmentProperties struct {
	PropertyGroups []PropertyGroup `json:"PropertyGroups"`
}
