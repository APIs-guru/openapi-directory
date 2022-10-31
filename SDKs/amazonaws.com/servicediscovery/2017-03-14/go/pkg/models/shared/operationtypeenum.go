package shared




type OperationTypeEnum string

const (
    OperationTypeEnumCreateNamespace OperationTypeEnum = "CREATE_NAMESPACE"
OperationTypeEnumDeleteNamespace OperationTypeEnum = "DELETE_NAMESPACE"
OperationTypeEnumUpdateNamespace OperationTypeEnum = "UPDATE_NAMESPACE"
OperationTypeEnumUpdateService OperationTypeEnum = "UPDATE_SERVICE"
OperationTypeEnumRegisterInstance OperationTypeEnum = "REGISTER_INSTANCE"
OperationTypeEnumDeregisterInstance OperationTypeEnum = "DEREGISTER_INSTANCE"
)


