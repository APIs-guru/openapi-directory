package shared

type AppPkgInfoModificationsOperationStateEnum string

const (
	AppPkgInfoModificationsOperationStateEnumDisabled AppPkgInfoModificationsOperationStateEnum = "DISABLED"
	AppPkgInfoModificationsOperationStateEnumEnabled  AppPkgInfoModificationsOperationStateEnum = "ENABLED"
)

// AppPkgInfoModifications
// 'The data type represents the operational state for an application package resource'
type AppPkgInfoModifications struct {
	OperationState AppPkgInfoModificationsOperationStateEnum `json:"operationState"`
}
