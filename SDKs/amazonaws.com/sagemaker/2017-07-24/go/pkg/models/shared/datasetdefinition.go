package shared

// DatasetDefinition
// Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
type DatasetDefinition struct {
	AthenaDatasetDefinition   *AthenaDatasetDefinition   `json:"AthenaDatasetDefinition,omitempty"`
	DataDistributionType      *DataDistributionTypeEnum  `json:"DataDistributionType,omitempty"`
	InputMode                 *InputModeEnum             `json:"InputMode,omitempty"`
	LocalPath                 *string                    `json:"LocalPath,omitempty"`
	RedshiftDatasetDefinition *RedshiftDatasetDefinition `json:"RedshiftDatasetDefinition,omitempty"`
}
