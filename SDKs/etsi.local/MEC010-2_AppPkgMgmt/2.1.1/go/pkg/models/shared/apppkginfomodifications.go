package shared




type AppPkgInfoModificationsOperationStateEnum string

const (
    AppPkgInfoModificationsOperationStateEnumDisabled AppPkgInfoModificationsOperationStateEnum = "DISABLED"
AppPkgInfoModificationsOperationStateEnumEnabled AppPkgInfoModificationsOperationStateEnum = "ENABLED"
)


type AppPkgInfoModifications struct {
    OperationState AppPkgInfoModificationsOperationStateEnum `json:"operationState"`
    
}

