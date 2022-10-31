package shared




type IntentStateEnum string

const (
    IntentStateEnumFailed IntentStateEnum = "Failed"
IntentStateEnumFulfilled IntentStateEnum = "Fulfilled"
IntentStateEnumInProgress IntentStateEnum = "InProgress"
IntentStateEnumReadyForFulfillment IntentStateEnum = "ReadyForFulfillment"
IntentStateEnumWaiting IntentStateEnum = "Waiting"
)


