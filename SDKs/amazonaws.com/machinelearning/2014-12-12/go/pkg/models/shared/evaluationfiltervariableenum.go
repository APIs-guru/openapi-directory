package shared

type EvaluationFilterVariableEnum string

const (
	EvaluationFilterVariableEnumCreatedAt     EvaluationFilterVariableEnum = "CreatedAt"
	EvaluationFilterVariableEnumLastUpdatedAt EvaluationFilterVariableEnum = "LastUpdatedAt"
	EvaluationFilterVariableEnumStatus        EvaluationFilterVariableEnum = "Status"
	EvaluationFilterVariableEnumName          EvaluationFilterVariableEnum = "Name"
	EvaluationFilterVariableEnumIamUser       EvaluationFilterVariableEnum = "IAMUser"
	EvaluationFilterVariableEnumMlModelID     EvaluationFilterVariableEnum = "MLModelId"
	EvaluationFilterVariableEnumDataSourceID  EvaluationFilterVariableEnum = "DataSourceId"
	EvaluationFilterVariableEnumDataURI       EvaluationFilterVariableEnum = "DataURI"
)
