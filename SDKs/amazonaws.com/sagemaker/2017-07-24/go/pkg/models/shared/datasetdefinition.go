package shared

type DatasetDefinition struct {
	AthenaDatasetDefinition   *AthenaDatasetDefinition   `json:"AthenaDatasetDefinition"`
	DataDistributionType      *DataDistributionTypeEnum  `json:"DataDistributionType"`
	InputMode                 *InputModeEnum             `json:"InputMode"`
	LocalPath                 *string                    `json:"LocalPath"`
	RedshiftDatasetDefinition *RedshiftDatasetDefinition `json:"RedshiftDatasetDefinition"`
}
