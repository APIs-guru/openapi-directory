package shared

// NodeConfigurationOption
// A list of node configurations.
type NodeConfigurationOption struct {
	EstimatedDiskUtilizationPercent *float64
	Mode                            *ModeEnum
	NodeType                        *string
	NumberOfNodes                   *int64
}
