package shared




type DeliveryStatusEnum string

const (
    DeliveryStatusEnumSuccessful DeliveryStatusEnum = "SUCCESSFUL"
DeliveryStatusEnumThrottled DeliveryStatusEnum = "THROTTLED"
DeliveryStatusEnumTemporaryFailure DeliveryStatusEnum = "TEMPORARY_FAILURE"
DeliveryStatusEnumPermanentFailure DeliveryStatusEnum = "PERMANENT_FAILURE"
DeliveryStatusEnumUnknownFailure DeliveryStatusEnum = "UNKNOWN_FAILURE"
DeliveryStatusEnumOptOut DeliveryStatusEnum = "OPT_OUT"
DeliveryStatusEnumDuplicate DeliveryStatusEnum = "DUPLICATE"
)


