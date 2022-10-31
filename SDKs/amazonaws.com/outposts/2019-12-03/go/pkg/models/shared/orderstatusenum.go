package shared




type OrderStatusEnum string

const (
    OrderStatusEnumReceived OrderStatusEnum = "RECEIVED"
OrderStatusEnumPending OrderStatusEnum = "PENDING"
OrderStatusEnumProcessing OrderStatusEnum = "PROCESSING"
OrderStatusEnumInstalling OrderStatusEnum = "INSTALLING"
OrderStatusEnumFulfilled OrderStatusEnum = "FULFILLED"
OrderStatusEnumCancelled OrderStatusEnum = "CANCELLED"
)


