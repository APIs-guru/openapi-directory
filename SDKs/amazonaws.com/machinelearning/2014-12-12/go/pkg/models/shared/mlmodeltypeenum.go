package shared

type MlModelTypeEnum string

const (
	MlModelTypeEnumRegression MlModelTypeEnum = "REGRESSION"
	MlModelTypeEnumBinary     MlModelTypeEnum = "BINARY"
	MlModelTypeEnumMulticlass MlModelTypeEnum = "MULTICLASS"
)
