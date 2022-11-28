package shared

// ParallelismConfiguration
// Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
type ParallelismConfiguration struct {
	AutoScalingEnabled *bool                 `json:"AutoScalingEnabled,omitempty"`
	ConfigurationType  ConfigurationTypeEnum `json:"ConfigurationType"`
	Parallelism        *int64                `json:"Parallelism,omitempty"`
	ParallelismPerKpu  *int64                `json:"ParallelismPerKPU,omitempty"`
}
