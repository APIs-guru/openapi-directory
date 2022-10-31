package shared

type TaggableResourceTypeEnum string

const (
	TaggableResourceTypeEnumBatchPrediction TaggableResourceTypeEnum = "BatchPrediction"
	TaggableResourceTypeEnumDataSource      TaggableResourceTypeEnum = "DataSource"
	TaggableResourceTypeEnumEvaluation      TaggableResourceTypeEnum = "Evaluation"
	TaggableResourceTypeEnumMlModel         TaggableResourceTypeEnum = "MLModel"
)
