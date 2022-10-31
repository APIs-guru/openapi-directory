package shared

type DatasetStatusEnum string

const (
	DatasetStatusEnumCreated             DatasetStatusEnum = "CREATED"
	DatasetStatusEnumIngestionInProgress DatasetStatusEnum = "INGESTION_IN_PROGRESS"
	DatasetStatusEnumActive              DatasetStatusEnum = "ACTIVE"
)
