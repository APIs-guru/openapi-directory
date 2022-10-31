package shared

type MonitoringProblemTypeEnum string

const (
	MonitoringProblemTypeEnumBinaryClassification     MonitoringProblemTypeEnum = "BinaryClassification"
	MonitoringProblemTypeEnumMulticlassClassification MonitoringProblemTypeEnum = "MulticlassClassification"
	MonitoringProblemTypeEnumRegression               MonitoringProblemTypeEnum = "Regression"
)
