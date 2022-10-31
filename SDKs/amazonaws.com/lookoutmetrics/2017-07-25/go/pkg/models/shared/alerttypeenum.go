package shared

type AlertTypeEnum string

const (
	AlertTypeEnumSns    AlertTypeEnum = "SNS"
	AlertTypeEnumLambda AlertTypeEnum = "LAMBDA"
)
