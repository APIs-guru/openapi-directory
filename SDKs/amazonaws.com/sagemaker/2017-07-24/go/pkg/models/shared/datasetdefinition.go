package shared

type DatasetDefinition struct {
	AthenaDatasetDefinition   *AthenaDatasetDefinition   `json:"AthenaDatasetDefinition,omitempty"`
	DataDistributionType      *DataDistributionTypeEnum  `json:"DataDistributionType,omitempty"`
	InputMode                 *InputModeEnum             `json:"InputMode,omitempty"`
	LocalPath                 *string                    `json:"LocalPath,omitempty"`
	RedshiftDatasetDefinition *RedshiftDatasetDefinition `json:"RedshiftDatasetDefinition,omitempty"`
}
