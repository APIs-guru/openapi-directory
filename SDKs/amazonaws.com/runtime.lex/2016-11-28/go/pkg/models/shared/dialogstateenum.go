package shared




type DialogStateEnum string

const (
    DialogStateEnumElicitIntent DialogStateEnum = "ElicitIntent"
DialogStateEnumConfirmIntent DialogStateEnum = "ConfirmIntent"
DialogStateEnumElicitSlot DialogStateEnum = "ElicitSlot"
DialogStateEnumFulfilled DialogStateEnum = "Fulfilled"
DialogStateEnumReadyForFulfillment DialogStateEnum = "ReadyForFulfillment"
DialogStateEnumFailed DialogStateEnum = "Failed"
)


