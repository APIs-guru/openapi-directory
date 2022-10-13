package shared

type OperationTypeEnum string

const (
	OperationTypeEnumInsert OperationTypeEnum = "INSERT"
	OperationTypeEnumModify OperationTypeEnum = "MODIFY"
	OperationTypeEnumRemove OperationTypeEnum = "REMOVE"
)
