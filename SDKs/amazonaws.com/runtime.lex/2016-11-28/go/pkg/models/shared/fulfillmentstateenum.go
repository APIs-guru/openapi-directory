package shared

type FulfillmentStateEnum string

const (
	FulfillmentStateEnumFulfilled           FulfillmentStateEnum = "Fulfilled"
	FulfillmentStateEnumFailed              FulfillmentStateEnum = "Failed"
	FulfillmentStateEnumReadyForFulfillment FulfillmentStateEnum = "ReadyForFulfillment"
)
